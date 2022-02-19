https://www.loginradius.com/blog/async/write-a-javascript-library-using-webpack-and-babel/


 steps to make changes in source code
 ------------------------------------

 1. make changes in source code as per the requirement.
 2. for local development use command `npm run build`
    2.1 you can run above command multiple times and can find the output file generated in `dist/` dir.
 3. when done, run the command `npm run bundle:edge` and commit all files.
    3.1 this command will create a production ready minified js at `script/<current-version-in-package.json>/` dir and also `auto increment the version in package.json`. 
 4. make sure new version script is generated and present in commit.
 5. push the changes to remote.

 key points to remember while building source version (x.x.x)
 ------------------------------------------------------------

 1. if fixing any bug/patch -> patch version change (x.x.[0-99])
 2. if having minor changes which doesn't break existing functionality -> minor version change (x.[0-99].x)
 3. if having major chnages or adding feature which may break existing functionality -> major version change ([1-99].x.x])


 current scope
 -------------

 only patch version change is supported via `npm run bundle:edge`.