require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片信息
let imageDatas = require('../data/imageDatas.json');

//使用自执行函数，将图片名信息转换成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr){
	for(var i = 0;i < imageDatasArr.length;i++){
		var singleImageData = imageDatasArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.fileName);

		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);

var GalleryByReactApp = React.createClass({
	render: function(){
		return (
                 <section className = "stage">
                    <section className = "img-sec">
                    </section>
                    <nav className = "controller-nav">
                    </nav>
                 </section>
			)
	}
});

GalleryByReactApp.defaultProps = {
};

export default GalleryByReactApp;
