import os
import glob
from PIL import Image

def convert_to_webp(src_dir, dest_dir, quality=80):
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)
        print(f"Created destination directory: {dest_dir}")

    # Find all jpg files in source directory
    pattern = os.path.join(src_dir, "ezgif-frame-*.jpg")
    src_files = sorted(glob.glob(pattern))

    if not src_files:
        print(f"No JPG files matching 'ezgif-frame-*.jpg' found in {src_dir}")
        return

    print(f"Found {len(src_files)} files to convert.")
    
    for idx, filepath in enumerate(src_files):
        filename = os.path.basename(filepath)
        name, _ = os.path.splitext(filename)
        dest_filepath = os.path.join(dest_dir, f"{name}.webp")
        
        try:
            with Image.open(filepath) as img:
                # Save as WebP with method=6 (maximum compression effort), quality=80
                img.save(dest_filepath, "WEBP", quality=quality, method=6)
            
            # Print progress every 10 frames
            if (idx + 1) % 10 == 0 or idx + 1 == len(src_files):
                print(f"[{idx + 1}/{len(src_files)}] Converted {filename} -> {name}.webp")
        except Exception as e:
            print(f"Error converting {filename}: {e}")

    print("Conversion completed successfully!")

if __name__ == "__main__":
    src = "c:/Users/sandeep.k/OneDrive/Desktop/website - Copy/public/frames/hero"
    dest = "c:/Users/sandeep.k/OneDrive/Desktop/website/public/frames/hero"
    convert_to_webp(src, dest, quality=80)
