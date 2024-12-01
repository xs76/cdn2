document.addEventListener('DOMContentLoaded', function() {
    if (window.top !== window.self) {
        top.location.href = document.location.href;
    }
});
