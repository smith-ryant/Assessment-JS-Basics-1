/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = "Git is a an Open Source distributed version control system that is available for free under the GNU General Public License version 2. The Git source code is hosted on GitHub, from where it can be downloaded or installed. Users can also utilize one of the binary installers to deploy Git on their systems. For example, they can use sudo to install Git on Linux, Homebrew on Mac or a downloadable executable file on Windows."


//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = "GitHub is a for-profit company that offers a cloud-based Git repository hosting service. Essentially, it makes it a lot easier for individuals and teams to use Git for version control and collaboration.GitHub’s interface is user-friendly enough so even novice coders can take advantage of Git. Without GitHub, using Git generally requires a bit more technical savvy and use of the command line."


//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition = "The git init command creates a new Git repository. It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository. Most other Git commands are not available outside of an initialized repository, so this is usually the first command you'll run in a new project."


//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition = "Clones a repository into a newly created directory, creates remote-tracking branches for each branch in the cloned repository (visible using git branch --remotes), and creates and checks out an initial branch that is forked from the cloned repository’s currently active branch. After the clone, a plain git fetch without arguments will update all the remote-tracking branches, and a git pull without arguments will in addition merge the remote master branch into the current master branch, if any (this is untrue when '--single-branch' is given; see below). This default configuration is achieved by creating references to the remote branch heads under refs/remotes/origin and by initializing remote.origin.url and remote.origin.fetch configuration variables."


//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition = "Displays paths that have differences between the index file and the current HEAD commit, paths that have differences between the working tree and the index file, and paths in the working tree that are not tracked by Git (and are not ignored by gitignore[5]). The first are what you would commit by running git commit; the second and third are what you could commit by running git add before running git commit."


//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition = "This command updates the index using the current content found in the working tree, to prepare the content staged for the next commit. It typically adds the current content of existing paths as a whole, but with some options it can also be used to add content with only part of the changes made to the working tree files applied, or remove paths that do not exist in the working tree anymore. The 'index' holds a snapshot of the content of the working tree, and it is this snapshot that is taken as the contents of the next commit. Thus after making any changes to the working tree, and before running the commit command, you must use the add command to add any new or modified files to the index. This command can be performed multiple times before a commit. It only adds the content of the specified file(s) at the time the add command is run; if you want subsequent changes included in the next commit, then you must run git add again to add the new content to the index. The git status command can be used to obtain a summary of which files have changes that are staged for the next commit. The git add command will not add ignored files by default. If any ignored files were explicitly specified on the command line, git add will fail with a list of ignored files. Ignored files reached by directory recursion or filename globbing performed by Git (quote your globs before the shell) will be silently ignored. The git add command can be used to add ignored files with the -f (force) option. Please see git-commit[1] for alternative ways to add content to a commit."


//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCommitDefinition = "Create a new commit containing the current contents of the index and the given log message describing the changes. The new commit is a direct child of HEAD, usually the tip of the current branch, and the branch is updated to point to it (unless no branch is associated with the working tree, in which case HEAD is 'detached' as described in git-checkout[1])."

const gitCommitCode = "git commit -am 'initial commit.'"


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'ginot push' does.
*/

//CODE HERE
const gitPushDefinition = "Updates remote refs using local refs, while sending objects necessary to complete the given refs. You can make interesting things happen to a repository every time you push into it, by setting up hooks there. See documentation for git-receive-pack[1]. When the command line does not specify where to push with the <repository> argument, branch.*.remote configuration for the current branch is consulted to determine where to push. If the configuration is missing, it defaults to origin. When the command line does not specify what to push with <refspec>... arguments or --all, --mirror, --tags options, the command finds the default <refspec> by consulting remote.*.push configuration, and if it is not found, honors push.default configuration to decide what to push (See git-config[1] for the meaning of push.default). When neither the command-line nor the configuration specifies what to push, the default behavior is used, which corresponds to the simple value for push.default: the current branch is pushed to the corresponding upstream branch, but as a safety measure, the push is aborted if the upstream branch does not have the same name as the local one."