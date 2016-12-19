# web-reader-landing-page

## Setup
This script must be run from a content server virtual environment, with a config file pointing to a content server database.

Run `git submodule init && git submodule update` to set up the core python module.

This project also uses npm and go, so both must be installed.

go requires a directory to use for the $GOPATH. go will install dependencies there.
E.g. `mkdir ~/dev/gopath; export GOPATH=~/dev/gopath`

Run `go get -u github.com/NYPL-Simplified/webpub-exporter` to download and build the exporter in your $GOPATH.

## Usage
bin/generate_landing_page <spreadsheet_file_name> <output_directory>

## License

```
Copyright © 2016 The New York Public Library, Astor, Lenox, and Tilden Foundations

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
