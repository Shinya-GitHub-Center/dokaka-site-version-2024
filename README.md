# About (dokaka-site-version-2024)

- Directories and files required to backup locally && regularly.
    - `r2-bucket-local` (This dir should be sync manually all the time)

## Regular Posting Procedure
1. Save tags information into each mp3 audio files beforehand.
2. Put audio, video, or picture files into each directory at `r2-bucket-local`
3. Run the command to upload to remote R2 bucket for either audio, video, or picture.
    - `file="<File Name with Extension>" pnpm audput`
    - `file="<File Name with Extension>" pnpm vidput`
    - `file="<File Name with Extension>" pnpm picput`
4. Create a new markdown post, using "post" snippet.
5. `pnpm dev`
6. Git procedure (staging, commit and push)
7. `pnpm build`
8. `pnpm wgup` 

## Frontend Dev Procedure
1. `git checkout -b <Dev_Branch_Name>` : Develop at DEV Branch
2. `pnpm build`
3. `pnpm wgup` 
4. Commit
5. `git checkout main`
6. `git merge <Dev_Branch_Name>`
7. at main branch : `pnpm wgup`

## Git Repos
- Here, set to private repository, not connected to the web hosting server.  
- Used only for a code sharing between my own local machines, located at any home places.

## Web Hosting Server
- Cloudflare pages (Project name : yourprjname)
- Production Branch - main

## Commands
- `pnpm wrangler r2 bucket list --jurisdiction eu`

## ETC
- `wrangler object put` will replace the same file if the same file was uploaded accidentally
