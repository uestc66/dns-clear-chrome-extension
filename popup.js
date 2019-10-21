const CLEAR_DNS = 'clear dns';

var bmmode = localStorage.getItem('bmmode');

// option
var checkbox = document.getElementById('clear-checkbox');
checkbox.checked = bmmode === 'true' ? 'checked' : '';
checkbox.addEventListener('click', function() {
  bmmode = this.checked;
  localStorage.setItem('bmmode', bmmode);
});

// 清除 dns
var btn = document.getElementById('clear-btn');
btn.addEventListener('click', function() {
  chrome.runtime.sendMessage(
    {
      action: CLEAR_DNS,
      bmmode: bmmode
    },
    response => {
      // 处理
      console.log('response', response);
    }
  );
});
