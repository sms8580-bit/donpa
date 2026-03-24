document.addEventListener("DOMContentLoaded", () => {
    // 1. 모바일 메뉴 토글
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // 서브 메뉴 클릭 시 메뉴 닫기
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. 헤더 스크롤 이벤트 및 로고 변환
    const header = document.getElementById('main-header');
    const logoImg = document.querySelector('.logo img');
    if (header) {
        const handleHeaderScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
                if (logoImg && !logoImg.src.includes('브라운')) logoImg.src = 'Image/돈빠_로고_브라운.png';
            } else {
                header.classList.remove('scrolled');
                if (logoImg && !logoImg.src.includes('화이트')) logoImg.src = 'Image/돈빠_로고_화이트.png';
            }
        };
        window.addEventListener('scroll', handleHeaderScroll);
        handleHeaderScroll(); // 초기 실행
    }

    // 3. Reveal 애니메이션 공통 처리 (메뉴 페이지 딜레이 적용 포함)
    const revealObserver = new IntersectionObserver((entries, observer) => {
        let delay = 0;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('menu-item')) {
                    // 메뉴 아이템일 경우 순차적으로 나타나도록 딜레이 적용
                    setTimeout(() => entry.target.classList.add('active'), delay);
                    delay += 100;
                } else {
                    entry.target.classList.add('active');
                }
                // 한 번 나타난 요소는 더 이상 관찰하지 않음 (기본 설정으로 원복)
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});
