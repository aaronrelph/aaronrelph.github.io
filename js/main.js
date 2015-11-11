$(function(){
  'use strict';

  content = $('#main').smoothState({
    prefetch: true,
    cacheLength: 2,
      onStart: {
      duration: 1500,
      render: function ($container) {
        $container.addClass('is-exiting');
        console.log('start');
      }
    },
    onReady: {
        duration: 1500,
        render: function ($container, $newContent) {
          $container.html($newContent);
          $container.removeClass('is-exiting');
          console.log('ready');
        }
      }
    },
    onAfter: function($container, $newContent) {
      console.log('all done');
    }
  }).data('smoothState');
});
