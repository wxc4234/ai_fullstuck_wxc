const form = document.getElementById('login-form');
const errorArea = document.getElementById('error-area');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // 阻止表单提交事件

  const usernameInput = document.getElementById('username-input');
  const passwordInput = document.getElementById('password-input');
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) { // 如果用户名或密码为空
    errorArea.textContent = '用户名或密码不能为空';
    return;
  }

  // 模拟 ajax 登录请求
  setTimeout(() => {
    if (Math.random() >= 0.5) { // 模拟随机登录成功或失败
      alert('登录成功');
      location.href = 'https://www.example.com/dashboard'; // 登录成功后重定向到仪表盘页面
    } else {
      errorArea.textContent = '用户名或密码不正确，请重试';
    }
  }, 1000);
});
