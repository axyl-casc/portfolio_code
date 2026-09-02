from pathlib import Path
from PIL import Image

# =========================
# CONFIG
# =========================

IMAGE_DIRECTORY = "."

MAX_WIDTH = 45
MAX_HEIGHT = 45

# =========================
# RESIZE IMAGES
# =========================

directory = Path(IMAGE_DIRECTORY)
supported_extensions = {".png", ".jpg", ".jpeg"}

for image_path in directory.iterdir():

    # Skip directories and unsupported files
    if not image_path.is_file():
        continue

    if image_path.suffix.lower() not in supported_extensions:
        continue

    # Don't resize images we've already created
    if image_path.name.startswith("resized_"):
        continue

    try:
        with Image.open(image_path) as image:
            original_size = image.size

            # Resize while maintaining aspect ratio
            image.thumbnail(
                (MAX_WIDTH, MAX_HEIGHT),
                Image.Resampling.LANCZOS
            )

            output_path = image_path.parent / f"resized_{image_path.name}"

            # JPG does not support transparency / RGBA
            if image_path.suffix.lower() in {".jpg", ".jpeg"}:
                if image.mode in {"RGBA", "LA", "P"}:
                    image = image.convert("RGB")

                image.save(
                    output_path,
                    quality=95,
                    optimize=True
                )
            else:
                image.save(
                    output_path,
                    optimize=True
                )

            print(
                f"{image_path.name}: "
                f"{original_size[0]}x{original_size[1]} -> "
                f"{image.width}x{image.height}"
            )

    except Exception as error:
        print(f"Failed to resize {image_path.name}: {error}")

print("Done!")