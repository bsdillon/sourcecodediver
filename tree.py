import os

def tree(dir_path, indent=""):
    files = []
    dirs = []

    try:
        for entry in os.listdir(dir_path):
            full_path = os.path.join(dir_path, entry)
            if os.path.isdir(full_path):
                dirs.append(entry)
            else:
                files.append(entry)

        for d in dirs:
            print(f"{indent}├── {d}")
            tree(os.path.join(dir_path, d), indent + "│   ")

        for i, f in enumerate(files):
            connector = "└──" if i == len(files) - 1 else "├──"
            print(f"{indent}{connector} {f}")
    except PermissionError:
        print(f"{indent}└── [Permission Denied]")

if __name__ == "__main__":
    import sys
    path = sys.argv[1] if len(sys.argv) > 1 else "."
    print(path)
    tree(path)