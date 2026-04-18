// 1. إعداد محرك الإعلانات باستخدام الرقم الخاص بكِ
const AdController = window.Adsgram.init({ blockId: "28072" });

// 2. تحميل رصيد المستخدم المحفوظ (أو البدء من 0 إذا كان جديداً)
let balance = parseInt(localStorage.getItem('user_coins')) || 0;

// تحديث الشاشة فور فتح اللعبة بالرصيد الحالي
updateUI();

// 3. الحصول على زر التعدين من الصفحة
const adBtn = document.getElementById('adBtn');

// 4. ماذا يحدث عندما يضغط المستخدم على الزر؟
adBtn.addEventListener('click', () => {
    // تغيير نص الزر ليشعر المستخدم أن الإعلان يتم تحميله
    adBtn.innerText = "جاري الاتصال بالمعدن...";
    adBtn.disabled = true;

    // طلب إظهار الإعلان من Adsgram
    AdController.show().then((result) => {
        // إذا شاهد المستخدم الإعلان كاملاً بنجاح
        balance += 100; // إضافة 100 عملة
        localStorage.setItem('user_coins', balance); // حفظ الرصيد في الجهاز
        updateUI(); // تحديث الأرقام على الشاشة
        alert("🎉 عمل رائع! كسبت 100 عملة تعدين.");
    }).catch((result) => {
        // إذا حدث خطأ (مثلاً لا يوجد إعلان متاح أو المنصة لم تُقبل بعد)
        alert("التعدين غير متاح حالياً. يرجى الانتظار حتى يتم تفعيل حسابك في Adsgram.");
        console.log("Adsgram Error:", result);
    }).finally(() => {
        // إعادة الزر لحالته الطبيعية بعد الانتهاء
        adBtn.innerText = "ابدأ التعدين واكسب 100 عملة";
        adBtn.disabled = false;
    });
});

// 5. وظيفة تحديث واجهة المستخدم (تحديث الأرقام والرتبة)
function updateUI() {
    // عرض الرصيد بتنسيق جميل
    document.getElementById('balance').innerText = balance.toLocaleString();
    
    // حساب نسبة التقدم (مثلاً كل
