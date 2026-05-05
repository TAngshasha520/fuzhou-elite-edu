// 导航切换功能
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.page-section');
  const navLinks = document.querySelectorAll('.nav-links a');
  const menuIcon = document.getElementById('menuIcon');
  const navList = document.getElementById('navLinks');

  // 点击导航链接时切换显示板块
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-page');

      // 隐藏所有板块
      sections.forEach(sec => sec.classList.remove('active'));
      // 显示目标板块
      document.getElementById(targetId).classList.add('active');

      // 更新导航高亮
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      // 在移动端点击后收起菜单
      if (window.innerWidth <= 768) {
        navList.classList.remove('show');
      }
    });
  });

  // 移动端菜单切换
  menuIcon.addEventListener('click', function () {
    navList.classList.toggle('show');
  });

  // 点击页面其他地方收起移动端菜单（可选）
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.navbar')) {
      navList.classList.remove('show');
    }
  });
});

// 简单的表单提交处理（暂存信息提示，后续可接真实后端）
document.getElementById('enrollForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  if (name && phone) {
    document.getElementById('formMsg').textContent = '提交成功，招生老师将在24小时内与您联系！';
    // 实际部署时可在这里接入第三方表单收集服务（如腾讯问卷、金数据等）
    this.reset();
  } else {
    document.getElementById('formMsg').textContent = '请填写完整信息。';
  }
});