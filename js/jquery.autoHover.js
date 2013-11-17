/* Copyright (c) 2010 Yuichiro Abe (http://www.itassist.info)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * $LastChangedDate: 2010-07-01 06:11:00 -0900 $
 * $Rev: 1 $
 *
 * Version 1.2
 */

;(function($) {

/* 項目エラー表示 */
	$.fn['autoHover'] = function(config) {
		config = jQuery.extend({
			suffix: "_hover"
		},config);
		
		this.each(function() {
			// 対象画像名取得
			var orgImgUrl = $(this).attr("src");
			
			if (orgImgUrl.match(config['suffix'])) {
				return this;
			}
			
			// 対象画像のマウスオーバー画像名生成
			var imgUrlWithoutExt = orgImgUrl.substr(0, orgImgUrl.length-4);
			var hoverImgUrl = imgUrlWithoutExt + config['suffix'] + orgImgUrl.substr(orgImgUrl.length-4);
			// 対象画像をマウスオーバーへセット
			$(this).hover(function(){$(this).attr('src',hoverImgUrl)},function(){$(this).attr('src',orgImgUrl)});
			// マウスカーソル変更
			$(this).css('cursor','pointer');
		});
		
		return this;
	}
	
	$.fn['noHover'] = function(config) {
		config = jQuery.extend({
			suffix: "_hover"
		},config);
		
		this.each(function() {
			// hover解除
			$(this).unbind('mouseenter');
			$(this).unbind('mouseleave');
			$(this).unbind('mouseover');
			$(this).unbind('mouseout');
			// マウスカーソル変更
			$(this).css('cursor','default');
		});
		
		return this;
	}
	
	$.fn['maskover'] = function(config) {
        config = $.extend({opacity: 25, color: "#FFFFFF", cssClass: "imageMask"}, config);
		
        return this.each(function() {
            // only create watermark if title attribute exists
            var $input = $(this);
			
			$(this).hover(function(){
				$(this).css({
					filter: "alpha(opacity=" + config['opacity'] + ")",
					"-moz-opacity": config['opacity'] * 0.01,
					"opacity": config['opacity'] * 0.01	
				});
			},function(){
				$(this).css({
					filter: "alpha(opacity=100)",
					"-moz-opacity": 1,
					"opacity": 1
				});
			});
			
			// マウスカーソル変更
			$(this).css('cursor','pointer');
        });
    };

})(jQuery);