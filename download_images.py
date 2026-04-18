#!/usr/bin/env python3
"""
download_images.py — Dragonfly Mission International
=====================================================
Run this script BEFORE canceling your Wix account to save all
site images locally. After running, your images/ folder will be
populated and the site will work without Wix's CDN.

Usage:
    python3 download_images.py

Requirements: Python 3.6+  (no extra packages needed)
"""

import urllib.request
import os
import sys

IMAGES_DIR = os.path.join(os.path.dirname(__file__), 'images')

IMAGES = {
    'hero-home.jpg':    'https://static.wixstatic.com/media/53f105_1b6d8d460b9f4fe3b843c632263b4093~mv2.jpg',
    'hero-story.jpg':   'https://static.wixstatic.com/media/53f105_ab230e4a96dd43cfa3006df8332b3dc5~mv2.jpg',
    'hero-mission.jpg': 'https://static.wixstatic.com/media/53f105_f6b117a9c7024fafb425f37f0a392420~mv2.jpg',
    'hero-serve.jpg':   'https://static.wixstatic.com/media/53f105_3e6794756a8a48d8994baaa6580e61ff~mv2.jpg',
    'logo.png':         'https://static.wixstatic.com/media/53f105_f0c1b762b9e04c1286ae604daa465cf4~mv2_d_1920_1200_s_2.png',
    'facebook.png':     'https://static.wixstatic.com/media/e0678ef25486466ba65ef6ad47b559e1.png',
    'instagram.png':    'https://static.wixstatic.com/media/da7ef6dd1302486c9a67baebe4b364bc.png',
}

# After downloading, these URL replacements switch the HTML from CDN to local paths
# Run with --update-html to also patch the HTML files
REPLACEMENTS = [
    ('https://static.wixstatic.com/media/53f105_1b6d8d460b9f4fe3b843c632263b4093~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01/53f105_1b6d8d460b9f4fe3b843c632263b4093~mv2.jpg', 'images/hero-home.jpg'),
    ('https://static.wixstatic.com/media/53f105_ab230e4a96dd43cfa3006df8332b3dc5~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01/53f105_ab230e4a96dd43cfa3006df8332b3dc5~mv2.jpg', 'images/hero-story.jpg'),
    ('https://static.wixstatic.com/media/53f105_f6b117a9c7024fafb425f37f0a392420~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01/53f105_f6b117a9c7024fafb425f37f0a392420~mv2.jpg', 'images/hero-mission.jpg'),
    ('https://static.wixstatic.com/media/53f105_3e6794756a8a48d8994baaa6580e61ff~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01/53f105_3e6794756a8a48d8994baaa6580e61ff~mv2.jpg', 'images/hero-serve.jpg'),
    ('https://static.wixstatic.com/media/53f105_1b6d8d460b9f4fe3b843c632263b4093~mv2.jpg/v1/fill/w_800,h_700,al_c,q_85/53f105_1b6d8d460b9f4fe3b843c632263b4093~mv2.jpg', 'images/hero-home.jpg'),
    ('https://static.wixstatic.com/media/53f105_f0c1b762b9e04c1286ae604daa465cf4~mv2_d_1920_1200_s_2.png/v1/crop/x_117,y_143,w_1719,h_898/fill/w_188,h_100,al_c,q_85,usm_0.66_1.00_0.01/53f105_f0c1b762b9e04c1286ae604daa465cf4~mv2_d_1920_1200_s_2.png', 'images/logo.png'),
    ('https://static.wixstatic.com/media/53f105_f0c1b762b9e04c1286ae604daa465cf4~mv2_d_1920_1200_s_2.png/v1/crop/x_117,y_143,w_1719,h_898/fill/w_188,h_100,al_c,q_85/53f105_f0c1b762b9e04c1286ae604daa465cf4~mv2_d_1920_1200_s_2.png', 'images/logo.png'),
    ('https://static.wixstatic.com/media/e0678ef25486466ba65ef6ad47b559e1.png/v1/fill/w_34,h_34,al_c,q_85/e0678ef25486466ba65ef6ad47b559e1.png', 'images/facebook.png'),
    ('https://static.wixstatic.com/media/da7ef6dd1302486c9a67baebe4b364bc.png/v1/fill/w_34,h_34,al_c,q_85/da7ef6dd1302486c9a67baebe4b364bc.png', 'images/instagram.png'),
    ('https://static.wixstatic.com/media/53f105_f6b117a9c7024fafb425f37f0a392420~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85/53f105_f6b117a9c7024fafb425f37f0a392420~mv2.jpg', 'images/hero-mission.jpg'),
]

HTML_FILES = [
    'index.html', 'story.html', 'mission.html', 'serve.html', 'blog.html',
    'blog/a-note-from-kathy.html', 'blog/on-pause.html', 'blog/lets-start-over.html',
]


def download_images():
    os.makedirs(IMAGES_DIR, exist_ok=True)
    headers = {'User-Agent': 'Mozilla/5.0 (compatible; DMI-downloader/1.0)'}
    print(f"Saving images to: {IMAGES_DIR}\n")
    for filename, url in IMAGES.items():
        dest = os.path.join(IMAGES_DIR, filename)
        if os.path.exists(dest):
            print(f"  ✓ {filename} (already exists, skipping)")
            continue
        print(f"  ↓ Downloading {filename}...", end='', flush=True)
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=60) as resp:
                data = resp.read()
            with open(dest, 'wb') as f:
                f.write(data)
            print(f" {len(data)//1024} KB")
        except Exception as e:
            print(f" FAILED: {e}")
    print("\nAll downloads complete!\n")


def update_html():
    base = os.path.dirname(__file__)
    print("Updating HTML files to use local image paths...\n")
    for rel_path in HTML_FILES:
        fpath = os.path.join(base, rel_path)
        if not os.path.exists(fpath):
            print(f"  ! {rel_path} not found, skipping")
            continue
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
        original = content
        # Adjust relative path for files in subdirectories
        prefix = '../' if '/' in rel_path else ''
        for cdn_url, local_path in REPLACEMENTS:
            content = content.replace(cdn_url, prefix + local_path)
        if content != original:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  ✓ Updated {rel_path}")
        else:
            print(f"  - {rel_path} (no changes needed)")
    print("\nHTML update complete!\n")


if __name__ == '__main__':
    download_images()
    if '--update-html' in sys.argv:
        update_html()
    else:
        print("Tip: Run  python3 download_images.py --update-html")
        print("     to also switch all HTML files from CDN URLs to local image paths.")
