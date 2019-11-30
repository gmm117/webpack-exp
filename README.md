# webpack-exp

# webpack
 - 웹어플리케이션 모듈들을 이용해서 번들링 하는 도구

# handlebars
 - template를 이용해서 모델에값을 적용해서 view에 적용해준다.

# caching & webpack
 - webpack 번들링 전까지는 브라우저 캐싱을 사용하고 번들링을 통해서 데이터가 변경되었을때에는 bundle_(hashing).js 만들어서 변경된 번들파일을 사용하도록 한다.

# Bundle
 - 모든 모듈을 로드하기 위해 검색하는 시간이 단축된다.
 - 사용하지 않는 코드를 제거해준다.
 - 파일의 크기를 줄여준다.

# npx webpack
 -  npx webpack --target=node (readline 내장함수 사용을 위해서 target 지정)

# webpack merge
 - 웹팩 파일을 merge 할수 있는 기능을 제공(npm install --save-dev webpack-merge)

# clean-webpack-plugin
 - bundling시 기존에 남아있는 파일을 삭제 후 새로 생성된 파일만 남도록 해주는 plugin이다.

# Chunk
 - bundling하는 파일 중에서 변하지 않는 것들을 모듈로 분류하는 것들을 Chunk 기능을 수행하는 기준이 된다.
 - runtime Chunk : 초기에 로딩중에 변하지 않는 코드를 모아놓은 Chunk
 - vender Chunk : 외부모듈,jquery 거의 변하지 않는 모듈들을 지칭