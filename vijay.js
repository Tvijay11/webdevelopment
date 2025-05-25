<script>
  // Cursor-based parallax animation
  document.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (x - centerX) / 100;
    const moveY = (y - centerY) / 100;

    document.querySelectorAll('.overview, .calendar, .upcoming, .activity, .anatomy').forEach(el => {
      el.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });

  document.addEventListener('mouseleave', () => {
    document.querySelectorAll('.overview, .calendar, .upcoming, .activity, .anatomy').forEach(el => {
      el.style.transform = `translate(0px, 0px)`;
    });
  });
</script>
