실습 준비 메모
=============

윈도우7에서 설치 및 맛보기
------------------------

* nodejs 설치
	
	[http://nodejs.org](http://nodejs.org "nodejs")에서 **Install** 클릭


* sublime text 3 설치
	
	[http://www.sublimetext.com/3](http://www.sublimetext.com/3 "sublime text 3")에서 다운로드

	- 설치후 실행

	- `` Ctrl+` ``으로 console을 연다음

	- > `import urllib.request,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404' + 'e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)`을 복사 입력후 엔터.

	- `Ctrl+Shift+p`로 **HTML5**, **nodejs** package 설치

	- 그후

		+ html, tab
		+ a, tab
		+ ajax, tab 
  

* git 설치

	[http://git-scm.com/](http://git-scm.com/ "git")에서 다운로드

	- 설치후 바탕화면에 Git Bash를 꺼내놓는다.

	- Git Bash를 실행해서 HOME 폴더로 간다. 

		`cd`

	- 아래 명령으로 github mylab repository에서 clone 한다.

		`git clone https://github.com/proddam/mylab.git`



* nodejs http server 실행하기
	
	git bash에서 npm error 나는 경우는 `mkdir -p /c/Users/[username]/AppData/Roaming/npm`으로 폴더를 강제로 만들어줘야 함

	git bash의 속성 정보에서 옵션 - 빠른편집 부분을 체크해야 bash창에서 마우스 드래그로 copy, paste가 가능함



* naver 첫페이지 로고 바꿔보기 - 크롬에서

	https://raw.githubusercontent.com/proddam/mylab/master/images/ysu_logo.png
	





