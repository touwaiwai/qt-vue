@echo off
set a=0
setlocal EnableDelayedExpansion
for %%n in (*.jpg) do (
set /A a+=1
ren "%%n" "!a!.jpg"
)
@echo off
set a=100
setlocal EnableDelayedExpansion
for %%n in (*.png) do (
set /A a+=1
ren "%%n" "!a!.png"
)
@echo off
set a=200
setlocal EnableDelayedExpansion
for %%n in (*.webp) do (
set /A a+=1
ren "%%n" "!a!.webp"
)