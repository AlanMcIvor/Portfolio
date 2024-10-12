window.addEventListener("DOMContentLoaded", () => {
  VANTA.NET({
    el: "#home_net",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0xffffff,
    backgroundColor: 0x70707,
    points: 8.0,
    maxDistance: 17.0,
    spacing: 20.0,
  });
});
