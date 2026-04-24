document.addEventListener('DOMContentLoaded', () => {
    // 1. 모바일 메뉴 토글
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // 2. 헤더 스크롤 효과
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. 요소 나타나기 애니메이션 (Intersection Observer)
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 4. 모달 로직 (개인정보처리방침 & 이용약관)
    const privacyPolicyContent = `
        <div class="modal-body">
            <h2>개인정보처리방침</h2>
            <div class="policy-section">
                <p>주식회사 위드플랜(이하 ‘회사’)는 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고, 원활한 창업 상담 및 문의 응대를 위해 다음과 같이 개인정보 처리방침을 수립·공개합니다.</p>
            </div>
            <div class="policy-section">
                <strong>제1조 (개인정보의 처리목적)</strong>
                <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다.</p>
                <p>1. 창업 문의 접수 및 상담 진행<br>2. 문의 내용 확인 및 결과 안내<br>3. 가맹 관련 정보 제공 및 안내 연락<br>4. 민원 처리 및 고객 응대</p>
            </div>
            <div class="policy-section">
                <strong>제2조 (개인정보의 처리 및 보유기간)</strong>
                <p>1. 회사는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 기간 내에서 개인정보를 처리 및 보유합니다.</p>
                <p>2. 개인정보 보유기간은 다음과 같습니다.<br>- 창업 문의 및 상담 : 문의일로부터 1년<br>단, 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.</p>
            </div>
            <div class="policy-section">
                <strong>제3조 (개인정보의 제3자 제공)</strong>
                <p>1. 회사는 정보주체의 개인정보를 제1조에서 명시한 범위 내에서만 처리하며, 정보주체의 동의 또는 법령에 따른 경우에만 제3자에게 제공합니다.<br>2. 회사는 원칙적으로 정보주체의 개인정보를 외부에 제공하지 않습니다.</p>
            </div>
            <div class="policy-section">
                <strong>제4조 (개인정보처리의 위탁)</strong>
                <p>1. 회사는 원활한 서비스 제공 및 데이터 관리를 위해 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.<br>- 위탁받는 자 : Google LLC<br>- 위탁업무 내용 : 문의 접수 시스템 및 데이터 보관(Google Sheets)</p>
                <p>2. 회사는 위탁계약 체결 시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한 등 필요한 사항을 규정하고 관리하고 있습니다.</p>
            </div>
            <div class="policy-section">
                <strong>제5조 (정보주체의 권리와 행사방법)</strong>
                <p>1. 정보주체는 회사에 대해 언제든지 개인정보 열람, 정정, 삭제, 처리정지 요구 등의 권리를 행사할 수 있습니다.<br>2. 권리 행사는 서면, 전화, 이메일 등을 통해 요청할 수 있으며 회사는 지체없이 조치합니다.</p>
            </div>
            <div class="policy-section">
                <strong>제6조 (처리하는 개인정보 항목)</strong>
                <p>회사는 다음의 개인정보 항목을 처리하고 있습니다.<br>- 필수항목 : 이름, 연락처, 문의내용<br>- 선택항목 : 이메일</p>
            </div>
            <div class="policy-section">
                <strong>제7조 (개인정보의 파기)</strong>
                <p>1. 회사는 개인정보 보유기간의 경과 또는 처리목적 달성 시 지체없이 해당 개인정보를 파기합니다.<br>2. 전자적 파일은 복구 불가능한 방법으로 삭제하며, 종이 문서는 분쇄 또는 소각합니다.</p>
            </div>
            <div class="policy-section">
                <strong>제8조 (개인정보의 안전성 확보조치)</strong>
                <p>회사는 개인정보 보호를 위해 다음과 같은 조치를 취하고 있습니다.<br>1. 관리적 조치 : 내부관리계획 수립 및 직원 교육<br>2. 기술적 조치 : 접근권한 관리 및 보안시스템 운영<br>3. 물리적 조치 : 자료보관실 접근통제</p>
            </div>
            <div class="policy-section">
                <strong>제9조 (개인정보 자동 수집 장치의 설치·운영 및 거부)</strong>
                <p>1. 회사는 맞춤형 서비스 제공을 위해 쿠키(cookie)를 사용할 수 있습니다.<br>2. 이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.</p>
            </div>
            <div class="policy-section">
                <strong>제10조 (개인정보 보호책임자)</strong>
                <p>회사는 개인정보 처리에 관한 업무를 총괄하는 책임자를 지정하고 있습니다.<br>- 담당자 : 마영혁<br>- 연락처 : 1522-7449</p>
            </div>
            <div class="policy-section">
                <strong>제11조 (권익침해 구제 방법)</strong>
                <p>정보주체는 개인정보 침해에 대한 피해구제, 상담 등을 아래 기관에 문의할 수 있습니다.<br>1. 개인정보 분쟁조정위원회 : 1833-6972<br>2. 개인정보침해신고센터 : 118<br>3. 대검찰청 : 1301<br>4. 경찰청 : 182</p>
            </div>
            <div class="policy-section">
                <strong>제12조 (개인정보 처리방침 시행 및 변경)</strong>
                <p>본 개인정보 처리방침은 2026.04.22부터 적용됩니다.</p>
            </div>
        </div>
    `;

    const termsOfUseContent = `
        <div class="modal-body">
            <h2>이용약관</h2>
            <div class="policy-section">
                <strong>제1조 (목적)</strong>
                <p>본 약관은 주식회사 위드플랜(이하 "회사"라 함)이 운영하는 웹사이트(이하 "사이트"라 함)에서 제공하는 서비스의 이용조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.</p>
            </div>
            <div class="policy-section">
                <strong>제2조 (용어의 정의)</strong>
                <p>1. "사이트"란 회사가 정보를 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 설정한 가상의 영업장을 말합니다.<br>2. "이용자"란 사이트에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 받는 고객을 말합니다.</p>
            </div>
            <div class="policy-section">
                <strong>제3조 (약관의 명시와 개정)</strong>
                <p>1. 회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 사이트의 초기화면에 게시합니다.<br>2. 회사는 관련법을 위배하지 않는 범위에서 본 약관을 개정할 수 있으며, 개정된 약관은 공지함으로써 효력이 발생합니다.</p>
            </div>
            <div class="policy-section">
                <strong>제4조 (서비스의 제공 및 변경)</strong>
                <p>회사는 사이트를 통해 브랜드 및 메뉴 소개, 매장 안내, 창업 상담 신청 접수 등의 서비스를 제공하며, 기술적 사양의 변경 등의 경우 서비스 내용을 변경할 수 있습니다.</p>
            </div>
            <div class="policy-section">
                <strong>제5조 (서비스의 중단)</strong>
                <p>회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
            </div>
            <div class="policy-section">
                <strong>제6조 (이용자의 의무)</strong>
                <p>이용자는 다음 행위를 하여서는 안 됩니다.<br>1. 신청 또는 변경 시 허위 내용의 등록<br>2. 사이트에 게시된 정보의 임의 변경<br>3. 회사 및 기타 제3자의 저작권 등 지적재산권에 대한 침해<br>4. 회사의 업무를 방해하는 행위</p>
            </div>
            <div class="policy-section">
                <strong>제7조 (저작권의 귀속 및 이용제한)</strong>
                <p>1. 회사가 작성한 저작물(사진, 디자인, 로고, 문구 등)에 대한 저작권 및 기타 지적재산권은 회사에 귀속됩니다.<br>2. 이용자는 사이트를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 배포 등 영리 목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</p>
            </div>
            <div class="policy-section">
                <strong>제8조 (개인정보보호)</strong>
                <p>회사는 이용자의 개인정보 수집 시 서비스 제공을 위하여 필요한 최소한의 정보를 수집하며, 상세 사항은 '개인정보처리방침'에 따릅니다.</p>
            </div>
            <div class="policy-section">
                <strong>제9조 (면책조항)</strong>
                <p>1. 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.<br>2. 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.</p>
            </div>
            <div class="policy-section">
                <strong>제10조 (게시물의 관리)</strong>
                <p>회사는 이용자가 게시하거나 전달하는 서비스 내의 게시물이 제6조의 의무를 위반한다고 판단되는 경우 사전 통지 없이 삭제할 수 있습니다.</p>
            </div>
            <div class="policy-section">
                <strong>제11조 (재판권 및 준거법)</strong>
                <p>1. 회사와 이용자 간에 발생한 전자거래 분쟁에 관한 소송은 회사의 본사 소재지를 관할하는 법원을 전용 관할 법원으로 합니다.<br>2. 회사와 이용자 간에 제기된 소송에는 대한민국법을 적용합니다.</p>
            </div>
            <div class="policy-section">
                <strong>제12조 (기타 사항)</strong>
                <p>본 약관에 명시되지 않은 사항은 관계 법령 및 상관례에 따릅니다.</p>
            </div>
            <p class="policy-date">시행 일자 : 2026. 04. 22</p>
        </div>
    `;

    // 모달 HTML 생성 및 바디에 삽입
    const modalHTML = `
        <div id="common-modal" class="modal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div id="modal-body-content"></div>
            </div>
        </div>
    `;

    if (!document.getElementById('common-modal')) {
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    const modal = document.getElementById('common-modal');
    const modalBody = document.getElementById('modal-body-content');
    const closeBtn = modal.querySelector('.close-modal');

    const openModal = (content) => {
        modalBody.innerHTML = content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // 개인정보처리방침 링크 이벤트
    document.querySelectorAll('a[href="privacy.html"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(privacyPolicyContent);
        });
    });

    // 이용약관 링크 이벤트
    document.querySelectorAll('a[href="terms.html"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(termsOfUseContent);
        });
    });

    // 닫기 버튼 클릭
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // 모달 바깥 영역 클릭 시 닫기
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
