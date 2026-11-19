Advanced JavaScript Assignment1

1. customMap — بناء بديل لfunction map

فكرة الحل:
التنقل بين عناصر الArray عبرfor loop مع تطبيق function ال callback على كل عنصر ماعدا ال hole، ثم إرجاع Array جديدة بنفس طول الArray الاصلية


Edge Cases:
- التحقق من نوع المدخلات ورمي TypeError إذا لم يكن المدخل Array أو إذا لم يكن ال callback function
- عدم تنفيذ ال callback على ال holes ، مع الحفاظ على موقعها كما تفعل map الأصلية.

2. customFilter بناء بديل لfunction Filter 

- فكرة الحل: اختبار كل عنصر في الArray  ماعدا ال hole عبر function ال callback  ثم إضافة العناصر الذي تحقق ال  condition فقط إلى Array جديدة

Edge Cases:
- التحقق من نوع المدخلات ورمي TypeError إذا لم يكن المدخل Array أو إذا لم يكن ال callback function
  - تجاوز ال holes في المصفوفات عبر !index in arr  مع عدم الاحتفاظ بموقع ال hole كما تفعل Filter الأصلية.

3. customReduce    بناء بديل لfunction Reduce 

- فكرة الحل: تتبع القيمة التراكمية عبر التكرار وتحديثها مع كل عنصر.
 Edge Cases:
  - التحقق مما إذا تم تمرير قيمة أولية startval عن طريقhasStartval = arguments.length > 2 
  - إذا لم تُمرر قيمة أولية، يتم أخذ أول عنصر موجود فعلياً في الArray كقيمة أولية دون معالجته callback  في البداية
  - تجاوز ال hole .

4. groupBy

- المطلوب: تجميع عناصر الArray في object حسب خاصية معينة.
- فكرة الحل: إنشاء object فارغ و وتصنيف العناصر بحيث يكون مفتاح الobject هو قيمة الخاصية المطلوبة، وقيمته Array تحتوي العناصر التابعة لهذا التصنيف.
 Edge Cases:
  -التحقق من نوع المدخلات ورمي TypeError إذا لم يكن المدخل Array
  - تجاهل العناصر الفارغة أو التي قيمتها undefined أو null.

5. deepClone

- فكرة الحل: اذا كان نوع البيانات المدخلة Primitives نقوم بارجاع القيمة كما هي مباشرة دون تعديل وإذا كان object أو Array يعاد استدعاء deepClone له لإنشاء  References جديد في الذاكرة.
 Edge Cases:
  - التمييز بين الArray والobject Array.isArray.
  - معالجة null لأن typeof null === 'object' في جافاسكريبت.
  - إرجاع  قيمة Primitives كما هي مباشرة دون تعديل.


6. once

- فكرة الحل:الاستفادة من مصطلح closure اذا كان قيمة المتغير one_call==true يمنع استدعاء الfunction مجدداً.
Edge Cases:
  - رمي TypeError إذا لم يكن المعامل function.

7. memoize

فكرة الحل: استخدام closure يحتوي على object يتم تخزين فية القيمة المرسلة و مع القيمة  التي تم ارجاعها من callback
 عند استدعاء ال memoize  يتم فحص اذا كان القيمة المرسلة  في داخل ال object يتم ارجاعة  دون إعادة الحساب.
 Edge Cases:
  - فحص نوع الfunction.
  - التحقق من وجود النتيجة في الكاش قبل إعادة التنفيذ.


8. compose
- فكرة الحل: تركيب عدة دوال بحيث يمرر مخرج كل function كمدخل للfunction التي تليها من اليمين إلى اليسار Right-to-Left استخدام ال for  العكسية على  Array function  , تمرير النتيجة تدريجيا
-Edge Cases:
  - التحقق من أن جميع العناصر الممررة functions  


9. flattenArray

- فكرة الحل: التكرار على العناصر إذا وُجد عنصر من نوع Array، يتم استدعاء الfunction ذاتياً recursion وإضافة نتائجه للArray المسطحة

Edge Cases:
  - فحص نوع الArray.
  - معالجة أي عمق من التداخلات.


10. createCounter

- فكرة الحل: عدم تسرب  متغيرcount داخل الاسكوب الخاص بال function  وارجاع function تزيد القيمة وترجعها في كل استدعاء

Edge Cases:
- اسناد قيمة احتياطية لقيمة الCounter  اذا لم يتم ارسال قيمة قيمة ابتدائية 


 11. createSecretHolder

- فكرة الحل:تخزين المتغير pass في السكوب المغلق وإتاحة getPass  فقط للوصول للقيمة مما يجعل المتغير غير قابلة للقراءة أو التعديل من خارج السكوب



 14. Final Boss - Event Emitter

- فكرة الحل: انشاء object  لتخزين اسم الحدث وال function الخاصة بالحدث باستخدام function on  و وتنفيذ ال function الخاصة ب اسم الحدث باستخدام  function emit

- Edge Cases:
- التحقق من  المدخلات ورمي TypeError إذا لم يكن المدخل  callback function
  - التحقق من وجود الحدث باستخدام Object.hasOwnevents, eventkey!  ورمي TypeError اذا لم يكن الحدث موجود
