# [Charlton.io](http://charlton.io) Squarespace Template
_(and [charlton.nyc](http://charlton.nyc), and [charlton.party](http://charlton.party))_

## Overview
Here lies the repository for the template used to create the Squarespace template seen on [charlton.io](http://charlton.io). It is built on the Squarespace Developer Platform and assembles some best practices I have developed. But neither the site nor the repo are affiliated with or endorsed by Squarespace.

## Code Structure
In general, I prefer small files and scarce folder contents with a by-product of a deep folder structure. You'll see that reflected here. Working files can be found in the directories `html`, `scripts`, and `styles`. Everything builds into the `template` folder, which can then be SFTP'd or gitted to Squarespace as a self-contained, lightweight custom template. Images are stored in the `images` directory and copied over to the `template/assets` folder.

### The `html` folder
Here you will find all JSON-T used for custom HTML. JSON-T is a Squarespace specific template language with a few _unique_ requirements. The folder structure here reflects most of the necessary template folder structure.

### The `template` folder
This is empty for a reason. This is our build folder, so we should never operate here. Run the build step, which will produce our template artifacts in here. Then, we can directly upload this folder's contents to Squarespace, without changing.

MIT Licensed. Copyright 2015 Charlton Roberts. All Rights Reserved.
