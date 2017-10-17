# git-difftool README

## Install

### MAC

```bash
git config --global merge.tool bc3
git config --global merge.bc3.trustExitCode true
git config --global diff.tool bc3
git config --global difftool.bc3.trustExitCode true
```


### Windows

```
git config --global core.editor notepad
git config --global -e
```

将以下代码复制到notepad中
```
[diff]
	tool = bc3
[difftool]
	prompt = false
[difftool "bc3"]
	cmd = \"c:/program files (x86)/beyond compare 3/bcomp.exe\" \"$LOCAL\" \"$REMOTE\"
[mergetool]
	prompt = false
	keepBackup = false
[mergetool "bc3"]
	cmd = \"c:/program files (x86)/beyond compare 3/bcomp.exe\" \"$LOCAL\" \"$REMOTE\" \"$BASE\" \"$MERGED\"
```


## RUN

1. 
Ctrl + Shift + G

2.
在变更的文件上右键菜单中点击“Run Difftool”