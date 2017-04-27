# web-reader-landing-page

## Setup

### Dependencies

* `npm` and `gulp` installed
* Having `go` installed and having `$GOPATH` env var set.

go requires a directory to use for the $GOPATH. go will install dependencies there.
E.g. `mkdir ~/dev/gopath; export GOPATH=~/dev/gopath`

Run `go get -u github.com/NYPL-Simplified/webpub-exporter` to download and build the exporter in your $GOPATH.

### Setup

* Install [virtualenv](http://pythoncentral.io/how-to-install-virtualenv-python/).
* Run `virtualenv env` to create the sandboxed virtualenv.
* Run `source ./env/bin/activate`
* Run `pip install -r requirements.txt`
* Run `git submodule init && git submodule update` to bring in the web reader.
* Run `npm install` to install `gulp` used to compile SCSS and minify CSS and JS.

## Usage

```bash
bin/generate_landing_page <publisher_asset_file_name> <book_spreadsheet> <output_directory>
```

|Argument                     |Description|
|-----------------------------|-----------|
|`<publisher_asset_file_name>`|"Dropbox URLs" sheet from [this spreadsheet](https://docs.google.com/spreadsheets/d/1TNykdmeY2zYOvWRcn46YBrF6ar31ZbLVzZANSoKASNk/edit?ts=58ece1d2#gid=1365026099)|
|`<spreadsheet_file_name>`    |A files that contains the books, in order (e.g "RS Selections" sheet from [this spreadsheet](https://docs.google.com/spreadsheets/d/1TNykdmeY2zYOvWRcn46YBrF6ar31ZbLVzZANSoKASNk/edit?ts=58ece1d2#gid=0))|
|`<output_directory>`         |Where to drop off build artifact|

### Uploading to S3

Follow the instructions at http://docs.aws.amazon.com/cli/latest/userguide/installing.html to install and configure the aws cli.

To upload an output directory to an s3 bucket, run

`aws s3 cp output s3://bucket-name/ --recursive --acl public-read --cache-control max-age=300 --profile your-aws-cli-profile-name`

Note this command is `cp`, not `sync`. This uploads any new or updated files, but does not remove deleted files. Any books that have been removed from the landing page will continue to be available to anyone who has started reading and bookmarked them.

## License

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
