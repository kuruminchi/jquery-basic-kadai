// HTMLドキュメントが読み込み完了時コンソールに出力
$(window).on('load', function() {
  console.log('loadイベントが発生しました');
});

// 画面スクロールしたときにコンソールに出力
$(function() {
  $(window).on('scroll', ()=> {
    console.log('scrollイベントが発生しました');
  });
});