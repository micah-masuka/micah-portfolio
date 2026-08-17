#!/usr/bin/env python3
"""Local server with the same clean URLs as cPanel (.htaccess)."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse
import os
import sys

ROOT = Path(__file__).resolve().parent.parent
os.chdir(ROOT)


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed = urlparse(self.path)
        raw = unquote(parsed.path)

        if raw.endswith("/") and raw != "/":
            candidate = Path(ROOT, raw.lstrip("/"), "index.html")
            if candidate.is_file():
                return super().do_GET()

        path = Path(ROOT, raw.lstrip("/"))
        if not path.exists() and not Path(raw).suffix:
            html = Path(str(path) + ".html")
            if html.is_file():
                self.path = raw + ".html"
                if parsed.query:
                    self.path += "?" + parsed.query
        return super().do_GET()

    def log_message(self, format, *args):
        sys.stderr.write("%s - %s\n" % (self.address_string(), format % args))


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print(f"Serving {ROOT}")
    print(f"Open http://127.0.0.1:{port}/")
    print("Clean URLs work here (e.g. /portfolio, /case-studies/logos-publicity)")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped")


if __name__ == "__main__":
    main()
