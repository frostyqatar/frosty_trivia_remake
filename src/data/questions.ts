import { Category } from '../types/game.types';

export const categories: Category[] = [
  {
    id: 'history',
    name: 'التاريخ العالمي',
    icon: '📜',
    questions: [
      { 
        value: 100, 
        question: "من هو أول رئيس للولايات المتحدة الأمريكية؟", 
        answer: "جورج واشنطن",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي عام بدأت الحرب العالمية الأولى؟", 
        answer: "1914",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو اسم السفينة التي اصطدمت بجبل جليدي وغرقت عام 1912؟", 
        answer: "تايتانيك",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الإمبراطور الفرنسي الذي غزا معظم أوروبا في القرن التاسع عشر؟", 
        answer: "نابليون بونابرت",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو مؤسس الإمبراطورية المغولية؟", 
        answer: "جنكيز خان",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي عام انتهت الحرب العالمية الثانية؟", 
        answer: "1945",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم المدينة التي ألقيت عليها أول قنبلة نووية؟", 
        answer: "هيروشيما",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو مكتشف قارة أمريكا؟", 
        answer: "كريستوفر كولومبوس",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الجدار الذي كان يفصل بين شرق وغرب برلين؟", 
        answer: "جدار برلين",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي عام انهار الاتحاد السوفيتي؟", 
        answer: "1991",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الحضارة التي بنت الأهرامات في مصر؟", 
        answer: "الحضارة الفرعونية",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو القائد الإسلامي الذي انتصر في معركة حطين؟", 
        answer: "صلاح الدين الأيوبي",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الحرب التي حدثت بين الشمال والجنوب في أمريكا؟", 
        answer: "الحرب الأهلية الأمريكية",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو أول إنسان هبط على سطح القمر؟", 
        answer: "نيل أرمسترونغ",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم أول إمبراطور للصين؟", 
        answer: "تشين شي هوانغ",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو أول خليفة في الإسلام؟", 
        answer: "أبو بكر الصديق",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي عام وقعت معركة واترلو؟", 
        answer: "1815",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الدولة التي كانت تُعرف سابقًا باسم بلاد فارس؟", 
        answer: "إيران",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم المدينة التي شهدت ولادة النهضة الأوروبية؟", 
        answer: "فلورنسا",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو الزعيم الهندي الذي قاد حركة الاستقلال السلمية ضد بريطانيا؟", 
        answer: "المهاتما غاندي",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الإمبراطورية التي حكمت تركيا قبل تأسيس الجمهورية؟", 
        answer: "الدولة العثمانية",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي عام اكتُشف البنسلين؟", 
        answer: "1928",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو القائد الروماني الشهير الذي تم اغتياله في 44 ق.م؟", 
        answer: "يوليوس قيصر",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو الفاتح الذي غزا القسطنطينية عام 1453؟", 
        answer: "محمد الفاتح",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي دولة كانت تسيطر على الهند قبل استقلالها عام 1947؟", 
        answer: "بريطانيا",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم المعركة الشهيرة التي هزم فيها المسلمون الفرس عام 636؟", 
        answer: "معركة القادسية",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو مؤسس الدولة العباسية؟", 
        answer: "أبو العباس السفاح",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الاتفاقية التي أنهت الحرب العالمية الأولى؟", 
        answer: "معاهدة فرساي",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم المستكشف البرتغالي الذي دار حول الأرض لأول مرة؟", 
        answer: "فرناندو ماجلان",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي عام قامت الثورة الفرنسية؟", 
        answer: "1789",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم المدينة التي كانت عاصمة الإمبراطورية الرومانية الشرقية؟", 
        answer: "القسطنطينية",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو الفيلسوف اليوناني الذي كان تلميذًا لسقراط؟", 
        answer: "أفلاطون",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي حضارة قديمة بنت مدينة ماتشو بيتشو في بيرو؟", 
        answer: "حضارة الإنكا",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الملك البريطاني الذي تنازل عن العرش من أجل الحب عام 1936؟", 
        answer: "الملك إدوارد الثامن",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو مؤسس الإمبراطورية العثمانية؟", 
        answer: "عثمان بن أرطغرل",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي عام بدأ عصر النهضة في أوروبا؟", 
        answer: "القرن الرابع عشر",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي دولة اشتهرت بإنتاج الفراعنة القدماء للورق من نبات البردي؟", 
        answer: "مصر",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم المدينة التي شهدت توقيع وثيقة الاستقلال الأمريكية؟", 
        answer: "فيلادلفيا",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو القائد العسكري القرطاجي الذي قاد جيشه عبر جبال الألب لمهاجمة روما؟", 
        answer: "هانيبال",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي دولة استعمرت الجزائر لمدة 132 عامًا؟", 
        answer: "فرنسا",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم المعركة التي وقعت عام 732 بين المسلمين والفرنجة؟", 
        answer: "معركة بلاط الشهداء",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي حضارة قديمة حكمها الملك حمورابي؟", 
        answer: "حضارة بابل",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو القائد الإسلامي الذي فتح الأندلس؟", 
        answer: "طارق بن زياد",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي دولة كانت تُعرف باسم سيام قديمًا؟", 
        answer: "تايلاند",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي عام وقعت حادثة 11 سبتمبر في الولايات المتحدة؟", 
        answer: "2001",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو الرئيس الأمريكي الذي حرر العبيد في أمريكا؟", 
        answer: "أبراهام لنكولن",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الحرب التي استمرت 100 عام بين إنجلترا وفرنسا؟", 
        answer: "حرب المئة عام",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو أول رئيس لمصر بعد ثورة 1952؟", 
        answer: "محمد نجيب",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم المعركة التي انتصر فيها نابليون بونابرت على النمسا وروسيا عام 1805؟", 
        answer: "معركة أوسترليتز",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي سنة سقطت بغداد بيد المغول؟", 
        answer: "1258",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو أول رئيس للولايات المتحدة الأمريكية؟", 
        answer: "جورج واشنطن",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي عام بدأت الحرب العالمية الأولى؟", 
        answer: "1914",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو اسم السفينة التي اصطدمت بجبل جليدي وغرقت عام 1912؟", 
        answer: "تايتانيك",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الإمبراطور الفرنسي الذي غزا معظم أوروبا في القرن التاسع عشر؟", 
        answer: "نابليون بونابرت",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو مؤسس الإمبراطورية المغولية؟", 
        answer: "جنكيز خان",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي عام انتهت الحرب العالمية الثانية؟", 
        answer: "1945",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم المدينة التي ألقيت عليها أول قنبلة نووية؟", 
        answer: "هيروشيما",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو مكتشف قارة أمريكا؟", 
        answer: "كريستوفر كولومبوس",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الجدار الذي كان يفصل بين شرق وغرب برلين؟", 
        answer: "جدار برلين",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي عام انهار الاتحاد السوفيتي؟", 
        answer: "1991",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الحضارة التي بنت الأهرامات في مصر؟", 
        answer: "الحضارة الفرعونية",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو القائد الإسلامي الذي انتصر في معركة حطين؟", 
        answer: "صلاح الدين الأيوبي",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الحرب التي حدثت بين الشمال والجنوب في أمريكا؟", 
        answer: "الحرب الأهلية الأمريكية",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو أول إنسان هبط على سطح القمر؟", 
        answer: "نيل أرمسترونغ",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم أول إمبراطور للصين؟", 
        answer: "تشين شي هوانغ",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو أول خليفة في الإسلام؟", 
        answer: "أبو بكر الصديق",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي عام وقعت معركة واترلو؟", 
        answer: "1815",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الدولة التي كانت تُعرف سابقًا باسم بلاد فارس؟", 
        answer: "إيران",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم المدينة التي شهدت ولادة النهضة الأوروبية؟", 
        answer: "فلورنسا",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو الزعيم الهندي الذي قاد حركة الاستقلال السلمية ضد بريطانيا؟", 
        answer: "المهاتما غاندي",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الإمبراطورية التي حكمت تركيا قبل تأسيس الجمهورية؟", 
        answer: "الدولة العثمانية",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي عام اكتُشف البنسلين؟", 
        answer: "1928",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو القائد الروماني الشهير الذي تم اغتياله في 44 ق.م؟", 
        answer: "يوليوس قيصر",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو الفاتح الذي غزا القسطنطينية عام 1453؟", 
        answer: "محمد الفاتح",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي دولة كانت تسيطر على الهند قبل استقلالها عام 1947؟", 
        answer: "بريطانيا",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم المعركة الشهيرة التي هزم فيها المسلمون الفرس عام 636؟", 
        answer: "معركة القادسية",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو مؤسس الدولة العباسية؟", 
        answer: "أبو العباس السفاح",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الاتفاقية التي أنهت الحرب العالمية الأولى؟", 
        answer: "معاهدة فرساي",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم المستكشف البرتغالي الذي دار حول الأرض لأول مرة؟", 
        answer: "فرناندو ماجلان",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي عام قامت الثورة الفرنسية؟", 
        answer: "1789",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم المدينة التي كانت عاصمة الإمبراطورية الرومانية الشرقية؟", 
        answer: "القسطنطينية",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو الفيلسوف اليوناني الذي كان تلميذًا لسقراط؟", 
        answer: "أفلاطون",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي حضارة قديمة بنت مدينة ماتشو بيتشو في بيرو؟", 
        answer: "حضارة الإنكا",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الملك البريطاني الذي تنازل عن العرش من أجل الحب عام 1936؟", 
        answer: "الملك إدوارد الثامن",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو مؤسس الإمبراطورية العثمانية؟", 
        answer: "عثمان بن أرطغرل",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي عام بدأ عصر النهضة في أوروبا؟", 
        answer: "القرن الرابع عشر",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي دولة اشتهرت بإنتاج الفراعنة القدماء للورق من نبات البردي؟", 
        answer: "مصر",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم المدينة التي شهدت توقيع وثيقة الاستقلال الأمريكية؟", 
        answer: "فيلادلفيا",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو القائد العسكري القرطاجي الذي قاد جيشه عبر جبال الألب لمهاجمة روما؟", 
        answer: "هانيبال",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي دولة استعمرت الجزائر لمدة 132 عامًا؟", 
        answer: "فرنسا",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم المعركة التي وقعت عام 732 بين المسلمين والفرنجة؟", 
        answer: "معركة بلاط الشهداء",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي حضارة قديمة حكمها الملك حمورابي؟", 
        answer: "حضارة بابل",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو القائد الإسلامي الذي فتح الأندلس؟", 
        answer: "طارق بن زياد",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي دولة كانت تُعرف باسم سيام قديمًا؟", 
        answer: "تايلاند",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي عام وقعت حادثة 11 سبتمبر في الولايات المتحدة؟", 
        answer: "2001",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو الرئيس الأمريكي الذي حرر العبيد في أمريكا؟", 
        answer: "أبراهام لنكولن",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الحرب التي استمرت 100 عام بين إنجلترا وفرنسا؟", 
        answer: "حرب المئة عام",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو أول رئيس لمصر بعد ثورة 1952؟", 
        answer: "محمد نجيب",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم المعركة التي انتصر فيها نابليون بونابرت على النمسا وروسيا عام 1805؟", 
        answer: "معركة أوسترليتز",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي سنة سقطت بغداد بيد المغول؟", 
        answer: "1258",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم الاتفاقية التي أنهت الحروب النابليونية عام 1815؟", 
        answer: "معاهدة فيينا",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الملك الإنجليزي الذي واجه الثورة المجيدة عام 1688؟", 
        answer: "الملك جيمس الثاني",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم المعركة التي دارت بين المسلمين والبيزنطيين عام 636؟", 
        answer: "معركة اليرموك",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي عام سقطت الأندلس بيد الإسبان؟", 
        answer: "1492",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الملك الفرنسي الذي أُعدم خلال الثورة الفرنسية؟", 
        answer: "لويس السادس عشر",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم القائد المغولي الذي اجتاح بغداد عام 1258؟", 
        answer: "هولاكو خان",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو القائد الذي قاد ألمانيا في الحرب العالمية الثانية؟", 
        answer: "أدولف هتلر",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم أول دستور مكتوب في العالم؟", 
        answer: "دستور الولايات المتحدة",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي معركة قُتل القائد المسلم موسى بن نصير؟", 
        answer: "لم يُقتل في معركة، بل توفي في طريق عودته إلى دمشق",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو مؤسس سلالة المماليك في مصر؟", 
        answer: "الظاهر بيبرس",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي عام أُسست الأمم المتحدة؟", 
        answer: "1945",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم الحرب التي دارت بين إنجلترا وفرنسا في القرن الثامن عشر حول المستعمرات؟", 
        answer: "حرب السنوات السبع",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو مؤسس الإمبراطورية الفارسية الأخمينية؟", 
        answer: "قورش الكبير",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم المعركة التي انتصر فيها الإنجليز على الأسطول الإسباني عام 1588؟", 
        answer: "معركة الأرمادا الإسبانية",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الخليفة العباسي الذي أمر بترجمة العلوم اليونانية إلى العربية؟", 
        answer: "الخليفة المأمون",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الزعيم الذي أسس تركيا الحديثة عام 1923؟", 
        answer: "مصطفى كمال أتاتورك",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي معركة أنهت حروب الفتح الإسلامي في فرنسا؟", 
        answer: "معركة بلاط الشهداء",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي عام بدأت الثورة الصناعية في بريطانيا؟", 
        answer: "القرن الثامن عشر",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الملك الفارسي الذي واجه الإسكندر الأكبر؟", 
        answer: "داريوس الثالث",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم المعركة البحرية التي خسر فيها العثمانيون أمام الأوروبيين عام 1571؟", 
        answer: "معركة ليبانتو",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو القائد الذي وحد اليابان في القرن السادس عشر؟", 
        answer: "تويوتومي هيده-يوشي",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الخليفة الأموي الذي بنى قبة الصخرة في القدس؟", 
        answer: "عبد الملك بن مروان",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي عام تم توقيع اتفاقية سايكس بيكو؟", 
        answer: "1916",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم آخر إمبراطور لروسيا قبل الثورة البلشفية؟", 
        answer: "نيكولاس الثاني",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الفيلسوف اليوناني الذي كان معلمًا للإسكندر الأكبر؟", 
        answer: "أرسطو",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي عام تم توحيد ألمانيا الحديثة؟", 
        answer: "1871",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم القائد الإسلامي الذي انتصر في معركة الزلاقة؟", 
        answer: "يوسف بن تاشفين",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الخليفة العباسي الذي نقل عاصمة الخلافة إلى بغداد؟", 
        answer: "أبو جعفر المنصور",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم الحرب التي خاضتها بريطانيا ضد الصين بسبب تجارة الأفيون؟", 
        answer: "حرب الأفيون",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الملك الذي بدأ عصر الإصلاح الديني في أوروبا؟", 
        answer: "مارتن لوثر (حركة الإصلاح البروتستانتي)",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي عام بدأت الثورة الأمريكية ضد بريطانيا؟", 
        answer: "1775",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الحاكم المغولي الذي بنى تاج محل؟", 
        answer: "شاه جهان",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم الدولة التي حكمت أجزاء واسعة من الهند قبل الاستعمار البريطاني؟", 
        answer: "الدولة المغولية",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي عام قامت الثورة البلشفية في روسيا؟", 
        answer: "1917",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم الملك الإنجليزي الذي أمر ببناء برج لندن؟", 
        answer: "وليام الفاتح",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الفاتح الذي أسس الدولة الصفوية في إيران؟", 
        answer: "إسماعيل الصفوي",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم المعاهدة التي قسمت الإمبراطورية الرومانية بين الشرق والغرب؟", 
        answer: "معاهدة ميلانو",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم التحالف العسكري الذي قادته ألمانيا في الحرب العالمية الأولى؟", 
        answer: "دول المحور",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الخليفة العثماني الذي ضم مصر إلى الدولة العثمانية؟", 
        answer: "سليم الأول",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم المعركة التي انتصر فيها نابليون بونابرت ضد الروس عام 1807؟", 
        answer: "معركة فريدلاند",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم القائد الذي فتح القسطنطينية عام 1453؟", 
        answer: "محمد الفاتح",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم العهد الذي حكمت فيه الملكة فيكتوريا بريطانيا؟", 
        answer: "العصر الفيكتوري",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي دولة استعمرت فيتنام قبل حرب فيتنام؟", 
        answer: "فرنسا",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم الاتفاقية التي أنهت الحرب بين العرب وإسرائيل عام 1979؟", 
        answer: "اتفاقية كامب ديفيد",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الزعيم الألماني الذي قاد ألمانيا إلى الوحدة في القرن التاسع عشر؟", 
        answer: "أوتو فون بسمارك",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم الحرب التي خاضتها الولايات المتحدة ضد إسبانيا عام 1898؟", 
        answer: "الحرب الأمريكية الإسبانية",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي عام انتهت الحرب الأهلية الإسبانية؟", 
        answer: "1939",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو أول إمبراطور لروما؟", 
        answer: "أوغسطس قيصر",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم المعركة التي هزم فيها المسلمون المغول لأول مرة؟", 
        answer: "معركة عين جالوت",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو مؤسس الدولة السعودية الأولى؟", 
        answer: "الإمام محمد بن سعود",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم الاتفاقية التي أنهت الحروب النابليونية عام 1815؟", 
        answer: "معاهدة فيينا",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الملك الإنجليزي الذي واجه الثورة المجيدة عام 1688؟", 
        answer: "الملك جيمس الثاني",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم المعركة التي دارت بين المسلمين والبيزنطيين عام 636؟", 
        answer: "معركة اليرموك",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي عام سقطت الأندلس بيد الإسبان؟", 
        answer: "1492",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الملك الفرنسي الذي أُعدم خلال الثورة الفرنسية؟", 
        answer: "لويس السادس عشر",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم القائد المغولي الذي اجتاح بغداد عام 1258؟", 
        answer: "هولاكو خان",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو القائد الذي قاد ألمانيا في الحرب العالمية الثانية؟", 
        answer: "أدولف هتلر",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم أول دستور مكتوب في العالم؟", 
        answer: "دستور الولايات المتحدة",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي معركة قُتل القائد المسلم موسى بن نصير؟", 
        answer: "لم يُقتل في معركة، بل توفي في طريق عودته إلى دمشق",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو مؤسس سلالة المماليك في مصر؟", 
        answer: "الظاهر بيبرس",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي عام أُسست الأمم المتحدة؟", 
        answer: "1945",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم الحرب التي دارت بين إنجلترا وفرنسا في القرن الثامن عشر حول المستعمرات؟", 
        answer: "حرب السنوات السبع",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو مؤسس الإمبراطورية الفارسية الأخمينية؟", 
        answer: "قورش الكبير",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم المعركة التي انتصر فيها الإنجليز على الأسطول الإسباني عام 1588؟", 
        answer: "معركة الأرمادا الإسبانية",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الخليفة العباسي الذي أمر بترجمة العلوم اليونانية إلى العربية؟", 
        answer: "الخليفة المأمون",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الزعيم الذي أسس تركيا الحديثة عام 1923؟", 
        answer: "مصطفى كمال أتاتورك",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي معركة أنهت حروب الفتح الإسلامي في فرنسا؟", 
        answer: "معركة بلاط الشهداء",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي عام بدأت الثورة الصناعية في بريطانيا؟", 
        answer: "القرن الثامن عشر",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الملك الفارسي الذي واجه الإسكندر الأكبر؟", 
        answer: "داريوس الثالث",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم المعركة البحرية التي خسر فيها العثمانيون أمام الأوروبيين عام 1571؟", 
        answer: "معركة ليبانتو",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو القائد الذي وحد اليابان في القرن السادس عشر؟", 
        answer: "تويوتومي هيده-يوشي",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الخليفة الأموي الذي بنى قبة الصخرة في القدس؟", 
        answer: "عبد الملك بن مروان",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي عام تم توقيع اتفاقية سايكس بيكو؟", 
        answer: "1916",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم آخر إمبراطور لروسيا قبل الثورة البلشفية؟", 
        answer: "نيكولاس الثاني",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الفيلسوف اليوناني الذي كان معلمًا للإسكندر الأكبر؟", 
        answer: "أرسطو",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي عام تم توحيد ألمانيا الحديثة؟", 
        answer: "1871",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم القائد الإسلامي الذي انتصر في معركة الزلاقة؟", 
        answer: "يوسف بن تاشفين",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الخليفة العباسي الذي نقل عاصمة الخلافة إلى بغداد؟", 
        answer: "أبو جعفر المنصور",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم الحرب التي خاضتها بريطانيا ضد الصين بسبب تجارة الأفيون؟", 
        answer: "حرب الأفيون",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الملك الذي بدأ عصر الإصلاح الديني في أوروبا؟", 
        answer: "مارتن لوثر (حركة الإصلاح البروتستانتي)",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي عام بدأت الثورة الأمريكية ضد بريطانيا؟", 
        answer: "1775",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الحاكم المغولي الذي بنى تاج محل؟", 
        answer: "شاه جهان",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم الدولة التي حكمت أجزاء واسعة من الهند قبل الاستعمار البريطاني؟", 
        answer: "الدولة المغولية",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي عام قامت الثورة البلشفية في روسيا؟", 
        answer: "1917",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم الملك الإنجليزي الذي أمر ببناء برج لندن؟", 
        answer: "وليام الفاتح",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الفاتح الذي أسس الدولة الصفوية في إيران؟", 
        answer: "إسماعيل الصفوي",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم المعاهدة التي قسمت الإمبراطورية الرومانية بين الشرق والغرب؟", 
        answer: "معاهدة ميلانو",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم التحالف العسكري الذي قادته ألمانيا في الحرب العالمية الأولى؟", 
        answer: "دول المحور",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الخليفة العثماني الذي ضم مصر إلى الدولة العثمانية؟", 
        answer: "سليم الأول",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم المعركة التي انتصر فيها نابليون بونابرت ضد الروس عام 1807؟", 
        answer: "معركة فريدلاند",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم القائد الذي فتح القسطنطينية عام 1453؟", 
        answer: "محمد الفاتح",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم العهد الذي حكمت فيه الملكة فيكتوريا بريطانيا؟", 
        answer: "العصر الفيكتوري",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي دولة استعمرت فيتنام قبل حرب فيتنام؟", 
        answer: "فرنسا",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم الاتفاقية التي أنهت الحرب بين العرب وإسرائيل عام 1979؟", 
        answer: "اتفاقية كامب ديفيد",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الزعيم الألماني الذي قاد ألمانيا إلى الوحدة في القرن التاسع عشر؟", 
        answer: "أوتو فون بسمارك",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم الحرب التي خاضتها الولايات المتحدة ضد إسبانيا عام 1898؟", 
        answer: "الحرب الأمريكية الإسبانية",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي عام انتهت الحرب الأهلية الإسبانية؟", 
        answer: "1939",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو أول إمبراطور لروما؟", 
        answer: "أوغسطس قيصر",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم المعركة التي هزم فيها المسلمون المغول لأول مرة؟", 
        answer: "معركة عين جالوت",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو مؤسس الدولة السعودية الأولى؟", 
        answer: "الإمام محمد بن سعود",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم المعركة التي خسر فيها نابليون بونابرت أمام الإنجليز عام 1815؟", 
        answer: "معركة واترلو",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الملك الإسباني الذي أطلق محاكم التفتيش ضد المسلمين واليهود؟", 
        answer: "الملك فرناندو الثاني",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الإمبراطورية التي حكمت الهند قبل الاحتلال البريطاني؟", 
        answer: "إمبراطورية المغول",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو القائد العربي الذي قاد ثورة العرب ضد العثمانيين خلال الحرب العالمية الأولى؟", 
        answer: "الشريف حسين بن علي",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي دولة أوروبية استعمرت الكونغو خلال القرن التاسع عشر؟", 
        answer: "بلجيكا",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الدولة التي غزت الكويت عام 1990؟", 
        answer: "العراق",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو القائد البريطاني الذي هزم نابليون في معركة واترلو؟", 
        answer: "دوق ولينغتون",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الاتفاقية التي قسمت بولندا بين روسيا وألمانيا قبل الحرب العالمية الثانية؟", 
        answer: "اتفاقية مولوتوف-ريبنتروب",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الرئيس الأمريكي الذي أمر بإلقاء القنبلتين الذريتين على اليابان؟", 
        answer: "هاري ترومان",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي إمبراطور ياباني كان يحكم خلال الحرب العالمية الثانية؟", 
        answer: "الإمبراطور هيروهيتو",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو القائد الذي وحّد إيطاليا في القرن التاسع عشر؟", 
        answer: "غاريبالدي",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم آخر معركة خاضها الفاتحون الإسبان ضد حضارة الإنكا؟", 
        answer: "معركة كاخاماركا",
        answered: false 
      },
      { 
        value: 300, 
        question: "في أي سنة اندلعت حرب الثلاثين عامًا في أوروبا؟", 
        answer: "1618",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي ملك إنجليزي تم إعدامه خلال الحرب الأهلية الإنجليزية؟", 
        answer: "الملك تشارلز الأول",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم السلالة الحاكمة التي حكمت روسيا قبل الثورة البلشفية؟", 
        answer: "عائلة رومانوف",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو القائد المغولي الذي أسس إمبراطورية المغول في الهند؟", 
        answer: "بابر",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي دولة كانت تعرف سابقًا باسم أنغورا؟", 
        answer: "تركيا",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم المدينة التي وقعت فيها أولى معارك الحرب الأهلية الأمريكية؟", 
        answer: "فورت سمتر",
        answered: false 
      },
      { 
        value: 300, 
        question: "في أي عام بدأ الاستعمار الفرنسي للجزائر؟", 
        answer: "1830",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الإمبراطور البيزنطي الذي أصدر \"قانون جستنيان\"؟", 
        answer: "جستنيان الأول",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الحاكم العثماني الذي خسر معركة ليبانتو؟", 
        answer: "السلطان سليم الثاني",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الحرب التي اندلعت بين بريطانيا وروسيا في القرن التاسع عشر؟", 
        answer: "حرب القرم",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو القائد العسكري الذي استولى على موسكو عام 1812؟", 
        answer: "نابليون بونابرت",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي حضارة قديمة كانت تستخدم الكتابة المسمارية؟", 
        answer: "الحضارة السومرية",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الاتفاقية التي أنهت حرب المئة عام بين فرنسا وإنجلترا؟", 
        answer: "معاهدة أميان",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الملك الفرنسي الذي لقب بـ\"الملك الشمس\"؟", 
        answer: "لويس الرابع عشر",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي دولة استعمرت إندونيسيا قبل استقلالها؟", 
        answer: "هولندا",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الرئيس الأمريكي الذي استقال بسبب فضيحة \"ووترغيت\"؟", 
        answer: "ريتشارد نيكسون",
        answered: false 
      },
      { 
        value: 300, 
        question: "في أي عام تم توحيد إيطاليا؟", 
        answer: "1861",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو أول قيصر لروسيا؟", 
        answer: "إيفان الرابع (إيفان الرهيب)",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي حضارة قديمة بنت تمثال أبو الهول؟", 
        answer: "الحضارة المصرية القديمة",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو القائد الذي حرر فنزويلا وكولومبيا من الاستعمار الإسباني؟", 
        answer: "سيمون بوليفار",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الإمبراطورية التي احتلت اليونان في العصور القديمة؟", 
        answer: "الإمبراطورية الفارسية",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي دولة استعمرت الفلبين قبل استقلالها عام 1946؟", 
        answer: "الولايات المتحدة الأمريكية",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الحاكم المغولي الذي غزا بغداد عام 1258؟", 
        answer: "هولاكو خان",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم التحالف العسكري الذي خاض الحرب ضد العثمانيين في معركة ليبانتو؟", 
        answer: "التحالف المقدس",
        answered: false 
      },
      { 
        value: 300, 
        question: "في أي عام انهارت إمبراطورية الإنكا؟", 
        answer: "1533",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي دولة استعمرت المغرب قبل استقلاله؟", 
        answer: "فرنسا وإسبانيا",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو أول رئيس للاتحاد السوفيتي؟", 
        answer: "فلاديمير لينين",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الوثيقة التي أعلنت استقلال الولايات المتحدة عن بريطانيا؟", 
        answer: "إعلان الاستقلال الأمريكي",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي دولة أوروبية استعمرت ليبيا في القرن العشرين؟", 
        answer: "إيطاليا",
        answered: false 
      },
      { 
        value: 300, 
        question: "في أي سنة تم إعدام ماري أنطوانيت؟", 
        answer: "1793",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم المعركة التي انتصر فيها الإنجليز على الفرنسيين عام 1415؟", 
        answer: "معركة أجينكور",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الحاكم الذي بنى سور الصين العظيم؟", 
        answer: "تشين شي هوانغ",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الاتفاقية التي أنهت الحرب بين مصر وإسرائيل عام 1979؟", 
        answer: "اتفاقية كامب ديفيد",
        answered: false 
      },
      { 
        value: 300, 
        question: "في أي عام توحدت كوريا قبل أن تنقسم إلى دولتين؟", 
        answer: "668 م (مملكة كوريو)",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الملك الإنجليزي الذي تنازل عن العرش من أجل الزواج من الأمريكية واليس سمبسون؟", 
        answer: "الملك إدوارد الثامن",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي معركة أنهت الحروب النابليونية تمامًا؟", 
        answer: "معركة واترلو",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الرئيس الأمريكي الذي قاد بلاده خلال الحرب الأهلية؟", 
        answer: "أبراهام لنكولن",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم القائد الذي انتصر على الرومان في معركة كاناي؟", 
        answer: "هانيبال",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم المعركة التي خسر فيها نابليون بونابرت أمام الإنجليز عام 1815؟", 
        answer: "معركة واترلو",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الملك الإسباني الذي أطلق محاكم التفتيش ضد المسلمين واليهود؟", 
        answer: "الملك فرناندو الثاني",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الإمبراطورية التي حكمت الهند قبل الاحتلال البريطاني؟", 
        answer: "إمبراطورية المغول",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو القائد العربي الذي قاد ثورة العرب ضد العثمانيين خلال الحرب العالمية الأولى؟", 
        answer: "الشريف حسين بن علي",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي دولة أوروبية استعمرت الكونغو خلال القرن التاسع عشر؟", 
        answer: "بلجيكا",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الدولة التي غزت الكويت عام 1990؟", 
        answer: "العراق",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو القائد البريطاني الذي هزم نابليون في معركة واترلو؟", 
        answer: "دوق ولينغتون",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الاتفاقية التي قسمت بولندا بين روسيا وألمانيا قبل الحرب العالمية الثانية؟", 
        answer: "اتفاقية مولوتوف-ريبنتروب",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الرئيس الأمريكي الذي أمر بإلقاء القنبلتين الذريتين على اليابان؟", 
        answer: "هاري ترومان",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي إمبراطور ياباني كان يحكم خلال الحرب العالمية الثانية؟", 
        answer: "الإمبراطور هيروهيتو",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو القائد الذي وحّد إيطاليا في القرن التاسع عشر؟", 
        answer: "غاريبالدي",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم آخر معركة خاضها الفاتحون الإسبان ضد حضارة الإنكا؟", 
        answer: "معركة كاخاماركا",
        answered: false 
      },
      { 
        value: 300, 
        question: "في أي سنة اندلعت حرب الثلاثين عامًا في أوروبا؟", 
        answer: "1618",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي ملك إنجليزي تم إعدامه خلال الحرب الأهلية الإنجليزية؟", 
        answer: "الملك تشارلز الأول",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم السلالة الحاكمة التي حكمت روسيا قبل الثورة البلشفية؟", 
        answer: "عائلة رومانوف",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو القائد المغولي الذي أسس إمبراطورية المغول في الهند؟", 
        answer: "بابر",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي دولة كانت تعرف سابقًا باسم أنغورا؟", 
        answer: "تركيا",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم المدينة التي وقعت فيها أولى معارك الحرب الأهلية الأمريكية؟", 
        answer: "فورت سمتر",
        answered: false 
      },
      { 
        value: 300, 
        question: "في أي عام بدأ الاستعمار الفرنسي للجزائر؟", 
        answer: "1830",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الإمبراطور البيزنطي الذي أصدر \"قانون جستنيان\"؟", 
        answer: "جستنيان الأول",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الحاكم العثماني الذي خسر معركة ليبانتو؟", 
        answer: "السلطان سليم الثاني",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الحرب التي اندلعت بين بريطانيا وروسيا في القرن التاسع عشر؟", 
        answer: "حرب القرم",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو القائد العسكري الذي استولى على موسكو عام 1812؟", 
        answer: "نابليون بونابرت",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي حضارة قديمة كانت تستخدم الكتابة المسمارية؟", 
        answer: "الحضارة السومرية",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الاتفاقية التي أنهت حرب المئة عام بين فرنسا وإنجلترا؟", 
        answer: "معاهدة أميان",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الملك الفرنسي الذي لقب بـ\"الملك الشمس\"؟", 
        answer: "لويس الرابع عشر",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي دولة استعمرت إندونيسيا قبل استقلالها؟", 
        answer: "هولندا",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الرئيس الأمريكي الذي استقال بسبب فضيحة \"ووترغيت\"؟", 
        answer: "ريتشارد نيكسون",
        answered: false 
      },
      { 
        value: 300, 
        question: "في أي عام تم توحيد إيطاليا؟", 
        answer: "1861",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو أول قيصر لروسيا؟", 
        answer: "إيفان الرابع (إيفان الرهيب)",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي حضارة قديمة بنت تمثال أبو الهول؟", 
        answer: "الحضارة المصرية القديمة",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو القائد الذي حرر فنزويلا وكولومبيا من الاستعمار الإسباني؟", 
        answer: "سيمون بوليفار",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الإمبراطورية التي احتلت اليونان في العصور القديمة؟", 
        answer: "الإمبراطورية الفارسية",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي دولة استعمرت الفلبين قبل استقلالها عام 1946؟", 
        answer: "الولايات المتحدة الأمريكية",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الحاكم المغولي الذي غزا بغداد عام 1258؟", 
        answer: "هولاكو خان",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم التحالف العسكري الذي خاض الحرب ضد العثمانيين في معركة ليبانتو؟", 
        answer: "التحالف المقدس",
        answered: false 
      },
      { 
        value: 300, 
        question: "في أي عام انهارت إمبراطورية الإنكا؟", 
        answer: "1533",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي دولة استعمرت المغرب قبل استقلاله؟", 
        answer: "فرنسا وإسبانيا",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو أول رئيس للاتحاد السوفيتي؟", 
        answer: "فلاديمير لينين",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الوثيقة التي أعلنت استقلال الولايات المتحدة عن بريطانيا؟", 
        answer: "إعلان الاستقلال الأمريكي",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي دولة أوروبية استعمرت ليبيا في القرن العشرين؟", 
        answer: "إيطاليا",
        answered: false 
      },
      { 
        value: 300, 
        question: "في أي سنة تم إعدام ماري أنطوانيت؟", 
        answer: "1793",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم المعركة التي انتصر فيها الإنجليز على الفرنسيين عام 1415؟", 
        answer: "معركة أجينكور",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الحاكم الذي بنى سور الصين العظيم؟", 
        answer: "تشين شي هوانغ",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الاتفاقية التي أنهت الحرب بين مصر وإسرائيل عام 1979؟", 
        answer: "اتفاقية كامب ديفيد",
        answered: false 
      },
      { 
        value: 300, 
        question: "في أي عام توحدت كوريا قبل أن تنقسم إلى دولتين؟", 
        answer: "668 م (مملكة كوريو)",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الملك الإنجليزي الذي تنازل عن العرش من أجل الزواج من الأمريكية واليس سمبسون؟", 
        answer: "الملك إدوارد الثامن",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي معركة أنهت الحروب النابليونية تمامًا؟", 
        answer: "معركة واترلو",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الرئيس الأمريكي الذي قاد بلاده خلال الحرب الأهلية؟", 
        answer: "أبراهام لنكولن",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم القائد الذي انتصر على الرومان في معركة كاناي؟", 
        answer: "هانيبال",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم الاتفاقية التي أنهت حرب الثلاثين عامًا في أوروبا؟", 
        answer: "صلح وستفاليا",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو القائد الذي شنّ الحملة الصليبية الرابعة؟", 
        answer: "البابا إنوسنت الثالث",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي حضارة قديمة اخترعت العجلة؟", 
        answer: "السومريون",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم الإمبراطور البيزنطي الذي خسر القسطنطينية عام 1453؟", 
        answer: "قسطنطين الحادي عشر",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو الحاكم الذي وحد ألمانيا وأصبح أول مستشار لها؟", 
        answer: "أوتو فون بسمارك",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي عام تم توقيع معاهدة تورديسيلاس بين إسبانيا والبرتغال؟", 
        answer: "1494",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو القائد الذي أسس إمبراطورية السيخ في الهند؟", 
        answer: "رانجيت سينغ",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم آخر ملوك فرنسا قبل الثورة الفرنسية؟", 
        answer: "لويس السادس عشر",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المعركة التي أوقفت تقدم العثمانيين في أوروبا عام 1683؟", 
        answer: "معركة فيينا",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي حضارة قديمة طوّرت الكتابة الهيروغليفية؟", 
        answer: "المصريون القدماء",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي عام اندلعت حرب الأفيون الأولى بين الصين وبريطانيا؟", 
        answer: "1839",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم التحالف الذي خاض الحرب ضد نابليون في معركة لايبزيغ؟", 
        answer: "التحالف السادس",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو المؤرخ اليوناني المعروف بـ\"أبو التاريخ\"؟", 
        answer: "هيرودوت",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم السلالة الحاكمة التي حكمت الصين قبل الثورة الشيوعية؟", 
        answer: "سلالة تشينغ",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي عام بدأ عصر ميجي في اليابان؟", 
        answer: "1868",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي دولة أوروبية استعمرت البرازيل؟", 
        answer: "البرتغال",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو الملك الإنجليزي الذي قاد الحملة الصليبية الثالثة؟", 
        answer: "ريتشارد قلب الأسد",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم الحرب التي اندلعت بين روسيا واليابان عام 1904؟", 
        answer: "الحرب الروسية اليابانية",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي عام انهارت الإمبراطورية الرومانية الغربية؟", 
        answer: "476 م",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو الخليفة العباسي الذي قُتل عند سقوط بغداد بيد المغول؟", 
        answer: "المستعصم بالله",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم السلالة الفارسية التي أسسها إسماعيل الصفوي؟", 
        answer: "السلالة الصفوية",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو القائد العسكري الفرنسي الذي أصبح إمبراطور هاييتي بعد الثورة؟", 
        answer: "جان جاك ديسالين",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم الاتفاقية التي أنهت حرب القرم؟", 
        answer: "معاهدة باريس 1856",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المعركة التي أدت إلى سقوط الدولة الأموية؟", 
        answer: "معركة الزاب",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي عام توحدت ألمانيا بالكامل بعد الحرب الباردة؟", 
        answer: "1990",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي دولة استعمرت السودان قبل استقلاله عام 1956؟", 
        answer: "بريطانيا ومصر",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو ملك إنجلترا الذي حكم لأقصر فترة زمنية؟", 
        answer: "الملك إدوارد الخامس",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي عام انتهت حرب فيتنام؟", 
        answer: "1975",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم الإمبراطور الروماني الذي قسّم الإمبراطورية إلى شرقية وغربية؟", 
        answer: "دقلديانوس",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي مدينة كانت عاصمة الإمبراطورية العثمانية قبل القسطنطينية؟", 
        answer: "بورصة",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المعركة التي خسرها الجيش العثماني أمام روسيا عام 1877؟", 
        answer: "معركة بلفنا",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو الخليفة الأموي الذي أنشأ الدواوين ونظم البريد؟", 
        answer: "عبد الملك بن مروان",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي إمبراطور روماني أعلن المسيحية ديانة رسمية للإمبراطورية؟", 
        answer: "ثيودوسيوس الأول",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المستكشف الذي قاد أول رحلة بحرية حول العالم؟", 
        answer: "فرناندو ماجلان",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي عام قامت الثورة الصينية التي أدت إلى حكم ماو تسي تونغ؟", 
        answer: "1949",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو الجنرال الإسباني الذي حكم بعد الحرب الأهلية الإسبانية؟", 
        answer: "فرانسيسكو فرانكو",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المدينة التي كانت مركزًا لحضارة الأزتك؟", 
        answer: "تينوختيتلان",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو الملك الذي بنى حدائق بابل المعلقة؟", 
        answer: "نبوخذ نصر الثاني",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي دولة استعمرت جنوب إفريقيا قبل البريطانيين؟", 
        answer: "هولندا",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم الحرب التي اندلعت بين إنجلترا واسكتلندا في القرن الثالث عشر؟", 
        answer: "حروب الاستقلال الاسكتلندية",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو القائد المغولي الذي اجتاح الهند وأسقط سلطنة دلهي؟", 
        answer: "تيمورلنك",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي سنة أُسست مملكة المملكة العربية السعودية الحديثة؟", 
        answer: "1932",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي دولة أوروبية استعمرت كوبا قبل استقلالها؟", 
        answer: "إسبانيا",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المدينة التي كانت عاصمة الخلافة الأموية في الأندلس؟", 
        answer: "قرطبة",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو القائد العسكري الذي هزم الفرس في معركة نهاوند؟", 
        answer: "النعمان بن مقرن",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي عام تم إلغاء نظام العبودية في الولايات المتحدة؟", 
        answer: "1865",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المعركة التي خسر فيها الفرس أمام الإغريق عام 490 ق.م؟", 
        answer: "معركة ماراثون",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي دولة استعمرت ماليزيا قبل استقلالها؟", 
        answer: "بريطانيا",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو الخليفة الذي أمر بترجمة الكتب إلى العربية في بيت الحكمة؟", 
        answer: "هارون الرشيد",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المدينة التي وقعت فيها معركة \"ستالينغراد\" خلال الحرب العالمية الثانية؟", 
        answer: "فولغوغراد (سابقًا ستالينغراد)",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم الاتفاقية التي أنهت حرب الثلاثين عامًا في أوروبا؟", 
        answer: "صلح وستفاليا",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو القائد الذي شنّ الحملة الصليبية الرابعة؟", 
        answer: "البابا إنوسنت الثالث",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي حضارة قديمة اخترعت العجلة؟", 
        answer: "السومريون",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم الإمبراطور البيزنطي الذي خسر القسطنطينية عام 1453؟", 
        answer: "قسطنطين الحادي عشر",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو الحاكم الذي وحد ألمانيا وأصبح أول مستشار لها؟", 
        answer: "أوتو فون بسمارك",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي عام تم توقيع معاهدة تورديسيلاس بين إسبانيا والبرتغال؟", 
        answer: "1494",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو القائد الذي أسس إمبراطورية السيخ في الهند؟", 
        answer: "رانجيت سينغ",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم آخر ملوك فرنسا قبل الثورة الفرنسية؟", 
        answer: "لويس السادس عشر",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المعركة التي أوقفت تقدم العثمانيين في أوروبا عام 1683؟", 
        answer: "معركة فيينا",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي حضارة قديمة طوّرت الكتابة الهيروغليفية؟", 
        answer: "المصريون القدماء",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي عام اندلعت حرب الأفيون الأولى بين الصين وبريطانيا؟", 
        answer: "1839",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم التحالف الذي خاض الحرب ضد نابليون في معركة لايبزيغ؟", 
        answer: "التحالف السادس",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو المؤرخ اليوناني المعروف بـ\"أبو التاريخ\"؟", 
        answer: "هيرودوت",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم السلالة الحاكمة التي حكمت الصين قبل الثورة الشيوعية؟", 
        answer: "سلالة تشينغ",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي عام بدأ عصر ميجي في اليابان؟", 
        answer: "1868",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي دولة أوروبية استعمرت البرازيل؟", 
        answer: "البرتغال",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو الملك الإنجليزي الذي قاد الحملة الصليبية الثالثة؟", 
        answer: "ريتشارد قلب الأسد",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم الحرب التي اندلعت بين روسيا واليابان عام 1904؟", 
        answer: "الحرب الروسية اليابانية",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي عام انهارت الإمبراطورية الرومانية الغربية؟", 
        answer: "476 م",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو الخليفة العباسي الذي قُتل عند سقوط بغداد بيد المغول؟", 
        answer: "المستعصم بالله",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم السلالة الفارسية التي أسسها إسماعيل الصفوي؟", 
        answer: "السلالة الصفوية",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو القائد العسكري الفرنسي الذي أصبح إمبراطور هاييتي بعد الثورة؟", 
        answer: "جان جاك ديسالين",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم الاتفاقية التي أنهت حرب القرم؟", 
        answer: "معاهدة باريس 1856",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المعركة التي أدت إلى سقوط الدولة الأموية؟", 
        answer: "معركة الزاب",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي عام توحدت ألمانيا بالكامل بعد الحرب الباردة؟", 
        answer: "1990",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي دولة استعمرت السودان قبل استقلاله عام 1956؟", 
        answer: "بريطانيا ومصر",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو ملك إنجلترا الذي حكم لأقصر فترة زمنية؟", 
        answer: "الملك إدوارد الخامس",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي عام انتهت حرب فيتنام؟", 
        answer: "1975",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم الإمبراطور الروماني الذي قسّم الإمبراطورية إلى شرقية وغربية؟", 
        answer: "دقلديانوس",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي مدينة كانت عاصمة الإمبراطورية العثمانية قبل القسطنطينية؟", 
        answer: "بورصة",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المعركة التي خسرها الجيش العثماني أمام روسيا عام 1877؟", 
        answer: "معركة بلفنا",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو الخليفة الأموي الذي أنشأ الدواوين ونظم البريد؟", 
        answer: "عبد الملك بن مروان",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي إمبراطور روماني أعلن المسيحية ديانة رسمية للإمبراطورية؟", 
        answer: "ثيودوسيوس الأول",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المستكشف الذي قاد أول رحلة بحرية حول العالم؟", 
        answer: "فرناندو ماجلان",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي عام قامت الثورة الصينية التي أدت إلى حكم ماو تسي تونغ؟", 
        answer: "1949",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو الجنرال الإسباني الذي حكم بعد الحرب الأهلية الإسبانية؟", 
        answer: "فرانسيسكو فرانكو",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المدينة التي كانت مركزًا لحضارة الأزتك؟", 
        answer: "تينوختيتلان",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو الملك الذي بنى حدائق بابل المعلقة؟", 
        answer: "نبوخذ نصر الثاني",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي دولة استعمرت جنوب إفريقيا قبل البريطانيين؟", 
        answer: "هولندا",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم الحرب التي اندلعت بين إنجلترا واسكتلندا في القرن الثالث عشر؟", 
        answer: "حروب الاستقلال الاسكتلندية",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو القائد المغولي الذي اجتاح الهند وأسقط سلطنة دلهي؟", 
        answer: "تيمورلنك",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي سنة أُسست مملكة المملكة العربية السعودية الحديثة؟", 
        answer: "1932",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي دولة أوروبية استعمرت كوبا قبل استقلالها؟", 
        answer: "إسبانيا",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المدينة التي كانت عاصمة الخلافة الأموية في الأندلس؟", 
        answer: "قرطبة",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو القائد العسكري الذي هزم الفرس في معركة نهاوند؟", 
        answer: "النعمان بن مقرن",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي عام تم إلغاء نظام العبودية في الولايات المتحدة؟", 
        answer: "1865",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المعركة التي خسر فيها الفرس أمام الإغريق عام 490 ق.م؟", 
        answer: "معركة ماراثون",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي دولة استعمرت ماليزيا قبل استقلالها؟", 
        answer: "بريطانيا",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو الخليفة الذي أمر بترجمة الكتب إلى العربية في بيت الحكمة؟", 
        answer: "هارون الرشيد",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المدينة التي وقعت فيها معركة \"ستالينغراد\" خلال الحرب العالمية الثانية؟", 
        answer: "فولغوغراد (سابقًا ستالينغراد)",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم المعركة التي قُتل فيها الإسكندر الأكبر؟", 
        answer: "معركة الهيداسبيس",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الخليفة العباسي الذي أمر بتدمير مكتبة بغداد في القرن التاسع؟", 
        answer: "لم يتم تدمير المكتبة العباسية في عهد الخليفة العباسي، ولكن تم نهب بغداد في 1258 تحت حكم المستعصم بالله عندما غزاها المغول",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم السلالة الصينية التي أسست أكبر إمبراطورية في التاريخ؟", 
        answer: "سلالة يوان",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام تم اكتشاف قبر توت عنخ آمون؟", 
        answer: "1922",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو مؤسس الإمبراطورية النمساوية-المجرية؟", 
        answer: "فرانسيس الثاني",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي سنة سقطت القسطنطينية بيد العثمانيين؟", 
        answer: "1453",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم السلالة الفارسية التي أسسها كورش الكبير؟", 
        answer: "السلالة الأخمينية",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام وقعت معركة غاستين في القرن السابع؟", 
        answer: "632 م",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم أول معركة بحرية انتصر فيها المسلمون ضد الروم؟", 
        answer: "معركة ذات الصواري",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الخليفة العباسي الذي نقل عاصمة الخلافة من دمشق إلى بغداد؟", 
        answer: "أبو جعفر المنصور",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام بدأت الهجرة النبوية من مكة إلى المدينة؟", 
        answer: "622 م",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم الدولة التي قادها كارل ماركس نحو الاشتراكية؟", 
        answer: "الاتحاد السوفيتي (من خلال الحركة الثورية وليس بشكل مباشر من ماركس نفسه)",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو القائد الذي فتح مصر عام 640؟", 
        answer: "عمرو بن العاص",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام انطلقت الحملة الفرنسية على مصر؟", 
        answer: "1798",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الإمبراطور الذي أمر ببناء \"الطريق المقدس\" في الرومانية القديمة؟", 
        answer: "الإمبراطور تراجان",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم المحارب الشهير الذي قاد الإمبراطورية المغولية في الهند؟", 
        answer: "أكبر شاه",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي معركة تم القضاء على قوة الفرنجة من قبل المغول؟", 
        answer: "معركة ليويانغ",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو قائد الفتوحات الإسلامية في بلاد فارس؟", 
        answer: "سعد بن أبي وقاص",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام وقعت معركة الإسكندرية بين القوات الرومانية والمصرية؟", 
        answer: "47 ق.م",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم الديانة التي أسسها زرادشت في بلاد فارس؟", 
        answer: "الزرادشتية",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو القائد الذي أسس الدولة المملوكية؟", 
        answer: "سيف الدين قطز",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الملك الفرنسي الذي أسس سلالة فاندوم؟", 
        answer: "هنري الرابع",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام وقع معركة أرسوف بين المسلمين والصليبيين؟", 
        answer: "1191",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم الإمبراطورية التي استعمرت الفلبين لمدة 300 سنة؟", 
        answer: "إسبانيا",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو المؤسس الفعلي لإمبراطورية الصين الموحدة؟", 
        answer: "تشين شي هوانغ",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام تم توقيع معاهدة تورديسيلاس التي قسمت العالم بين إسبانيا والبرتغال؟", 
        answer: "1494",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم الإمبراطورية التي دمرت أثناء هجوم المغول في القرن الثالث عشر؟", 
        answer: "إمبراطورية خوارزم",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي معركة انتصر المسلمون على البيزنطيين خلال الفتح الإسلامي؟", 
        answer: "معركة مؤتة",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم أول إمبراطورة صينية؟", 
        answer: "إمبراطورة وو",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم المعركة التي كانت بداية النهاية للإمبراطورية الفارسية على يد الإسكندر؟", 
        answer: "معركة غوغاميلا",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام تم تأسيس المحكمة العسكرية الدولية بعد الحرب العالمية الثانية؟", 
        answer: "1945",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الملك الذي جمع العديد من المدن الإيطالية في القرن الخامس عشر؟", 
        answer: "لورنزو دي ميديشي",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الزعيم الذي أسس المملكة المتحدة للولايات العربية بعد الحرب العالمية الأولى؟", 
        answer: "الملك فيصل الأول",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الزعيم الذي قاد حركة الاستقلال الجزائرية ضد الاستعمار الفرنسي؟", 
        answer: "أحمد بن بلة",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام قام نابليون بونابرت بتتويج نفسه إمبراطورًا لفرنسا؟", 
        answer: "1804",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الذي ألهم الكتابة القانونية التي تستخدم في معظم العالم؟", 
        answer: "حمورابي",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام تم تقسيم الهند إلى دولتين بعد الاستقلال؟", 
        answer: "1947",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم المملكة التي قادها الملك مينيس موحدًا مصر؟", 
        answer: "المملكة الفرعونية القديمة",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو ملك بابل الذي حكم في القرن السادس قبل الميلاد ووسع إمبراطوريته؟", 
        answer: "نبوخذ نصر الثاني",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي معركة هزم الرومان القرطاجيين عام 202 ق.م؟", 
        answer: "معركة زاما",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم السلالة التي حكمت الصين قبل حكم أسرة تشينغ؟", 
        answer: "سلالة مينغ",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام بدأت الحرب الأهلية الأمريكية؟", 
        answer: "1861",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم القائد الذي دخل الإسكندرية في مصر وأصبح فرعونًا؟", 
        answer: "الإسكندر الأكبر",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي سنة شهدت العالم أول انقلاب عسكري في التاريخ الحديث؟", 
        answer: "1917 (ثورة أكتوبر البلشفية في روسيا)",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم المدينة التي كانت العاصمة البيزنطية قبل إسطنبول؟", 
        answer: "القسطنطينية",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام انهارت الدولة العثمانية؟", 
        answer: "1922",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم القائد الذي غزا بلاد الهند في القرن التاسع عشر وأدى إلى تدمير سلطنة دلهي؟", 
        answer: "تيمورلنك",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الزعيم الذي أسس أول دولة في العصر الحديث في اليابان؟", 
        answer: "ميجي",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم المعركة التي شهدت أول انتصار عسكري إسرائيلي ضد جيوش عربية عام 1948؟", 
        answer: "معركة اللطرون",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام تم تأسيس الاتحاد السوفيتي؟", 
        answer: "1922",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم المعركة التي قُتل فيها الإسكندر الأكبر؟", 
        answer: "معركة الهيداسبيس",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الخليفة العباسي الذي أمر بتدمير مكتبة بغداد في القرن التاسع؟", 
        answer: "لم يتم تدمير المكتبة العباسية في عهد الخليفة العباسي، ولكن تم نهب بغداد في 1258 تحت حكم المستعصم بالله عندما غزاها المغول",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم السلالة الصينية التي أسست أكبر إمبراطورية في التاريخ؟", 
        answer: "سلالة يوان",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام تم اكتشاف قبر توت عنخ آمون؟", 
        answer: "1922",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو مؤسس الإمبراطورية النمساوية-المجرية؟", 
        answer: "فرانسيس الثاني",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي سنة سقطت القسطنطينية بيد العثمانيين؟", 
        answer: "1453",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم السلالة الفارسية التي أسسها كورش الكبير؟", 
        answer: "السلالة الأخمينية",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام وقعت معركة غاستين في القرن السابع؟", 
        answer: "632 م",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم أول معركة بحرية انتصر فيها المسلمون ضد الروم؟", 
        answer: "معركة ذات الصواري",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الخليفة العباسي الذي نقل عاصمة الخلافة من دمشق إلى بغداد؟", 
        answer: "أبو جعفر المنصور",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام بدأت الهجرة النبوية من مكة إلى المدينة؟", 
        answer: "622 م",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم الدولة التي قادها كارل ماركس نحو الاشتراكية؟", 
        answer: "الاتحاد السوفيتي (من خلال الحركة الثورية وليس بشكل مباشر من ماركس نفسه)",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو القائد الذي فتح مصر عام 640؟", 
        answer: "عمرو بن العاص",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام انطلقت الحملة الفرنسية على مصر؟", 
        answer: "1798",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الإمبراطور الذي أمر ببناء \"الطريق المقدس\" في الرومانية القديمة؟", 
        answer: "الإمبراطور تراجان",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم المحارب الشهير الذي قاد الإمبراطورية المغولية في الهند؟", 
        answer: "أكبر شاه",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي معركة تم القضاء على قوة الفرنجة من قبل المغول؟", 
        answer: "معركة ليويانغ",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو قائد الفتوحات الإسلامية في بلاد فارس؟", 
        answer: "سعد بن أبي وقاص",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام وقعت معركة الإسكندرية بين القوات الرومانية والمصرية؟", 
        answer: "47 ق.م",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم الديانة التي أسسها زرادشت في بلاد فارس؟", 
        answer: "الزرادشتية",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو القائد الذي أسس الدولة المملوكية؟", 
        answer: "سيف الدين قطز",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الملك الفرنسي الذي أسس سلالة فاندوم؟", 
        answer: "هنري الرابع",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام وقع معركة أرسوف بين المسلمين والصليبيين؟", 
        answer: "1191",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم الإمبراطورية التي استعمرت الفلبين لمدة 300 سنة؟", 
        answer: "إسبانيا",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو المؤسس الفعلي لإمبراطورية الصين الموحدة؟", 
        answer: "تشين شي هوانغ",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام تم توقيع معاهدة تورديسيلاس التي قسمت العالم بين إسبانيا والبرتغال؟", 
        answer: "1494",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم الإمبراطورية التي دمرت أثناء هجوم المغول في القرن الثالث عشر؟", 
        answer: "إمبراطورية خوارزم",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي معركة انتصر المسلمون على البيزنطيين خلال الفتح الإسلامي؟", 
        answer: "معركة مؤتة",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم أول إمبراطورة صينية؟", 
        answer: "إمبراطورة وو",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم المعركة التي كانت بداية النهاية للإمبراطورية الفارسية على يد الإسكندر؟", 
        answer: "معركة غوغاميلا",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام تم تأسيس المحكمة العسكرية الدولية بعد الحرب العالمية الثانية؟", 
        answer: "1945",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الملك الذي جمع العديد من المدن الإيطالية في القرن الخامس عشر؟", 
        answer: "لورنزو دي ميديشي",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الزعيم الذي أسس المملكة المتحدة للولايات العربية بعد الحرب العالمية الأولى؟", 
        answer: "الملك فيصل الأول",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الزعيم الذي قاد حركة الاستقلال الجزائرية ضد الاستعمار الفرنسي؟", 
        answer: "أحمد بن بلة",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام قام نابليون بونابرت بتتويج نفسه إمبراطورًا لفرنسا؟", 
        answer: "1804",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الذي ألهم الكتابة القانونية التي تستخدم في معظم العالم؟", 
        answer: "حمورابي",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام تم تقسيم الهند إلى دولتين بعد الاستقلال؟", 
        answer: "1947",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم المملكة التي قادها الملك مينيس موحدًا مصر؟", 
        answer: "المملكة الفرعونية القديمة",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو ملك بابل الذي حكم في القرن السادس قبل الميلاد ووسع إمبراطوريته؟", 
        answer: "نبوخذ نصر الثاني",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي معركة هزم الرومان القرطاجيين عام 202 ق.م؟", 
        answer: "معركة زاما",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم السلالة التي حكمت الصين قبل حكم أسرة تشينغ؟", 
        answer: "سلالة مينغ",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام بدأت الحرب الأهلية الأمريكية؟", 
        answer: "1861",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم القائد الذي دخل الإسكندرية في مصر وأصبح فرعونًا؟", 
        answer: "الإسكندر الأكبر",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي سنة شهدت العالم أول انقلاب عسكري في التاريخ الحديث؟", 
        answer: "1917 (ثورة أكتوبر البلشفية في روسيا)",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم المدينة التي كانت العاصمة البيزنطية قبل إسطنبول؟", 
        answer: "القسطنطينية",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام انهارت الدولة العثمانية؟", 
        answer: "1922",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم القائد الذي غزا بلاد الهند في القرن التاسع عشر وأدى إلى تدمير سلطنة دلهي؟", 
        answer: "تيمورلنك",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الزعيم الذي أسس أول دولة في العصر الحديث في اليابان؟", 
        answer: "ميجي",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم المعركة التي شهدت أول انتصار عسكري إسرائيلي ضد جيوش عربية عام 1948؟", 
        answer: "معركة اللطرون",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي عام تم تأسيس الاتحاد السوفيتي؟", 
        answer: "1922",
        answered: false 
      }
    ]
  },
  {
    id: 'science',
    name: 'العلوم والطبيعة',
    icon: '🔬',
    questions: [
      { 
        value: 100, 
        question: "ما هو العنصر الكيميائي الذي يشكل غالبية قلب الشمس؟", 
        answer: "الهيدروجين",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي نوع من الحيوانات يملك القدرة على تجديد أطرافه بالكامل بعد فقدها؟", 
        answer: "السلمندر",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي نوع من الصخور توجد معظم المعادن النفيسة مثل الذهب والفضة؟", 
        answer: "الصخور البركانية",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي الظاهرة التي تحدث عندما يتم امتصاص الضوء بواسطة سطح الأرض ويتم تحويله إلى حرارة؟", 
        answer: "الامتصاص الحراري",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي غاز يعد المكون الرئيسي في الغلاف الجوي للأرض؟", 
        answer: "النيتروجين",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو نوع الأشجار الذي يستخدم في صناعة الورق بشكل رئيسي؟", 
        answer: "أشجار الصنوبر",
        answered: false 
      },
      { 
        value: 100, 
        question: "كيف يساهم المحيط في تنظيم مناخ الأرض؟", 
        answer: "من خلال تخزين الحرارة وتوزيعها",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو الكائن الحي الذي يعد الأسرع في السباحة في المحيطات؟", 
        answer: "سمك الماكريل",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي المادة الكيميائية التي تساعد في نقل الأوكسجين عبر الدم في جسم الإنسان؟", 
        answer: "الهيموجلوبين",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي مرحلة من دورة حياة النحل تتحول اليرقة إلى ملكة؟", 
        answer: "مرحلة الخادرة",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي العملية التي تحدث عندما يتحول الماء من حالة السائل إلى بخار؟", 
        answer: "التبخر",
        answered: false 
      },
      { 
        value: 100, 
        question: "كيف يستطيع الإنسان تمييز الألوان في الضوء الذي نراه؟", 
        answer: "بواسطة الخلايا المخروطية في العين",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي نوع من الكائنات الحية يعتبر العامل الأساسي في تحلل المواد العضوية في التربة؟", 
        answer: "البكتيريا",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو الجزء في النبات الذي يعالج الضوء لتحويله إلى طاقة؟", 
        answer: "الكلوروفيل",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو أعمق نقطة في المحيطات؟", 
        answer: "الحفرة ماريانا",
        answered: false 
      },
      { 
        value: 100, 
        question: "كيف تساهم التربة في حماية البيئة؟", 
        answer: "من خلال تصفية المياه ومنع التعرية",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي الخاصية التي تجعل الحديد قابلًا للسحب؟", 
        answer: "المرونة",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي نوع من الطيور لديه قدرة على الطيران لأطول مسافة دون توقف؟", 
        answer: "طائر القطرس",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي الآلية التي تجعل المياه تتحرك في النباتات من الجذور إلى الأوراق؟", 
        answer: "الرفع الشعري",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي نوع من الغيوم تحدث عادةً العواصف الرعدية؟", 
        answer: "السحب الركامية",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي القوى التي تحافظ على الأرض في مدارها حول الشمس؟", 
        answer: "الجاذبية والقصور الذاتي",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو المعدن الذي يستخدم في صناعة الأسلاك الكهربائية بسبب توصيله الممتاز؟", 
        answer: "النحاس",
        answered: false 
      },
      { 
        value: 100, 
        question: "كيف يمكن تفسير ظاهرة \"الشرارة\" في البرق؟", 
        answer: "نتيجةً لتسارع الإلكترونات في الهواء بين السحب والأرض",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو السبب الرئيسي لتغير لون الأوراق في الخريف؟", 
        answer: "انخفاض مستوى الكلوروفيل",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي الخاصية التي تجعل بعض المواد مثل الماء تتحول من الحالة السائلة إلى الحالة الغازية في درجة حرارة منخفضة؟", 
        answer: "الضغط المنخفض",
        answered: false 
      },
      { 
        value: 100, 
        question: "كيف تساهم الغابات في الحفاظ على التنوع البيولوجي؟", 
        answer: "من خلال توفير موائل للعديد من الأنواع",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي نوع من الكائنات الحية يعتمده الإنسان في إنتاج الأدوية التقليدية؟", 
        answer: "النباتات الطبية",
        answered: false 
      },
      { 
        value: 100, 
        question: "كيف يمكن للأنظمة البيئية أن تتأثر بالتغيرات في درجات الحرارة؟", 
        answer: "من خلال التأثير على تكاثر الكائنات الحية وأنماط الهجرة",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو المكون الأساسي للغلاف الجوي لكوكب الزهرة؟", 
        answer: "ثاني أكسيد الكربون",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي نوع من الظروف يمكن للأشجار أن تنمو بشكل أسرع؟", 
        answer: "في التربة الغنية بالعناصر الغذائية والمناخ المعتدل",
        answered: false 
      },
      { 
        value: 100, 
        question: "كيف يمكن للطبقات الأرضية أن تتغير بمرور الوقت؟", 
        answer: "من خلال العمليات الجيولوجية مثل التعرية والضغط الحراري",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي الأنواع الأكثر شيوعًا من الطاقة المستخدمة في محطات الطاقة الشمسية؟", 
        answer: "الطاقة الحرارية والطاقة الكهربائية",
        answered: false 
      },
      { 
        value: 100, 
        question: "كيف يساهم النظام البيئي البحري في تنظيم كوكب الأرض؟", 
        answer: "من خلال امتصاص الكربون وتوفير الأوكسجين",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي الخلايا المسؤولة عن مناعة الجسم البشري؟", 
        answer: "الخلايا الليمفاوية",
        answered: false 
      },
      { 
        value: 100, 
        question: "كيف تحدث ظاهرة الشفق القطبي؟", 
        answer: "عندما تتفاعل الجسيمات المشحونة القادمة من الشمس مع الغلاف المغناطيسي للأرض",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي نوع من المواد يتم امتصاص الأشعة فوق البنفسجية بشكل رئيسي؟", 
        answer: "المواد الداكنة اللون",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو السبب الذي يجعل الأقطاب المغناطيسية للأرض تتحرك بمرور الوقت؟", 
        answer: "التغيرات في التيارات السائلة داخل لب الأرض",
        answered: false 
      },
      { 
        value: 100, 
        question: "كيف يتم تصنيف المخلوقات الحية التي لا تحتوي على نواة حقيقية؟", 
        answer: "كائنات بدائية النواة",
        answered: false 
      },
      { 
        value: 100, 
        question: "كيف يمكن أن تؤثر التفاعلات الكيميائية في الغلاف الجوي على صحة الإنسان؟", 
        answer: "من خلال التسبب في تلوث الهواء الذي يؤثر على التنفس",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي المادة التي تمنح النبات لونه الأخضر؟", 
        answer: "الكلوروفيل",
        answered: false 
      },
      { 
        value: 100, 
        question: "كيف يتم تشكل الصخور الرسوبية؟", 
        answer: "من خلال تراكم وطبقات الرواسب على مر العصور",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو العامل المسؤول عن انقراض الديناصورات؟", 
        answer: "يعتقد أن الكويكب الذي ضرب الأرض تسبب في تدمير البيئة",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو الدور الذي تلعبه الكائنات الدقيقة في دورة النيتروجين؟", 
        answer: "تحويل النيتروجين إلى مركبات قابلة للاستخدام في التربة",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو العنصر الكيميائي الذي يشكل القشرة الأرضية بنسبة عالية؟", 
        answer: "الأوكسجين",
        answered: false 
      },
      { 
        value: 100, 
        question: "كيف يؤثر الإشعاع الشمسي في الأرض؟", 
        answer: "من خلال تسخين الغلاف الجوي والمحيطات",
        answered: false 
      },
      { 
        value: 100, 
        question: "كيف تساهم الكائنات البحرية في إنتاج الأوكسجين؟", 
        answer: "من خلال عملية التمثيل الضوئي للكائنات البحرية مثل الطحالب",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي الأداة التي يستخدمها العلماء لقياس شدة الزلازل؟", 
        answer: "جهاز السيزم",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي جزء من جهاز الإنسان يحدث الهضم الأولي للطعام؟", 
        answer: "الفم",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو العامل الذي يسبب تغيرات في المناخ على مدار العصور؟", 
        answer: "التغيرات في التركيب الكيميائي للغلاف الجوي",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو المبدأ الذي يعتمد عليه مقياس الحرارة لقياس درجة حرارة الجسم؟", 
        answer: "تمدد وانكماش السوائل",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو الجزء من النبات الذي يساهم بشكل رئيسي في امتصاص الماء؟", 
        answer: "الجذور",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو الغاز الذي تشكّل معظم الغلاف الجوي للأرض ولكن لا يمكن للبشر استخدامه للتنفس؟", 
        answer: "النيتروجين",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي نوع من الغيوم تحدث عادة العواصف الرعدية؟", 
        answer: "السحب الركامية",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف يمكن للمعادن أن تتحول من حالة السائل إلى الصلب؟", 
        answer: "من خلال التبريد والتصلب",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هي العناصر التي تتكون منها البروتينات؟", 
        answer: "الأحماض الأمينية",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف يمكن للأشجار أن تساهم في تقليل تلوث الهواء؟", 
        answer: "من خلال امتصاص ثاني أكسيد الكربون وإنتاج الأوكسجين",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو الجزيء الذي يحمل المعلومات الوراثية في الكائنات الحية؟", 
        answer: "الحمض النووي (DNA)",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هي المادة المسؤولة عن نقل الأوكسجين في الدم؟", 
        answer: "الهيموجلوبين",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو الغاز الذي يمكن أن يسبب ظاهرة الاحتباس الحراري إذا كان موجودًا بكميات كبيرة في الغلاف الجوي؟", 
        answer: "ثاني أكسيد الكربون",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف يتم إنتاج الطاقة الشمسية؟", 
        answer: "من خلال تحويل ضوء الشمس إلى كهرباء باستخدام الخلايا الشمسية",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف يحدث التبادل الغازي بين الإنسان والنباتات؟", 
        answer: "من خلال عملية التنفس والتمثيل الضوئي",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف تتم عملية نقل الأوكسجين من الرئتين إلى الأنسجة؟", 
        answer: "من خلال الدم الذي يحمل الأوكسجين عبر الأوعية الدموية",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هي العملية التي يتم من خلالها تحويل الطاقة الكيميائية إلى طاقة حركية في الجسم؟", 
        answer: "عملية الأيض",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف تنتقل الطاقة الشمسية عبر الفضاء إلى الأرض؟", 
        answer: "على شكل إشعاع كهرومغناطيسي",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هي الغدة التي تتحكم في إنتاج الهرمونات التي تنظم التمثيل الغذائي؟", 
        answer: "الغدة الدرقية",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف يحدث التحول من السائل إلى الغاز؟", 
        answer: "من خلال عملية التبخر أو الغليان",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف يمكن تحديد عمر الصخور باستخدام طريقة الكربون المشع؟", 
        answer: "من خلال قياس نسبة الكربون المشع في الصخور",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف تتحرك الأجرام السماوية في النظام الشمسي؟", 
        answer: "نتيجةً للجاذبية التي تمارسها الشمس",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو الفرق بين الخلايا الحيوانية والخلايا النباتية؟", 
        answer: "الخلايا النباتية تحتوي على جدران خلوية وكلوروفيل",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو العنصر الذي يعد المكون الرئيسي للكواكب الغازية العملاقة مثل المشتري؟", 
        answer: "الهيدروجين",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو المعدن الأكثر وفرة في قشرة الأرض؟", 
        answer: "الألومنيوم",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف تساهم الغابات الاستوائية في تنظيم المناخ؟", 
        answer: "من خلال امتصاص ثاني أكسيد الكربون وتنظيم دورة الماء",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هي الجزيئات التي تستخدمها الكائنات الحية للحصول على الطاقة؟", 
        answer: "الكربوهيدرات",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هي العملية التي تتحول فيها النباتات إلى طاقة باستخدام الضوء؟", 
        answer: "التمثيل الضوئي",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو الجزء من الدم الذي يساعد في مقاومة العدوى؟", 
        answer: "خلايا الدم البيضاء",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي جزء من الخلية يحدث إنتاج الطاقة؟", 
        answer: "الميتوكوندريا",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو العامل الذي يمكن أن يسبب تغييرًا في سرعة التفاعل الكيميائي؟", 
        answer: "درجة الحرارة والتركيز",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو العضو الذي يساعد في التخلص من الفضلات السائلة في الجسم؟", 
        answer: "الكلى",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف يحدث انتقال الحرارة في السوائل والغازات؟", 
        answer: "من خلال الحمل الحراري",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف يتم تحريك الشحنات الكهربائية في الأسلاك؟", 
        answer: "بواسطة التيار الكهربائي",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هي الطريقة التي يتم بها امتصاص الأملاح المعدنية من التربة بواسطة النبات؟", 
        answer: "من خلال النقل النشط",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف يمكن للغلاف الجوي أن يؤثر على حياة الإنسان؟", 
        answer: "من خلال حمايته من الأشعة الضارة وتوفير الأوكسجين",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو السبب الذي يجعل الأرض لا تظل دافئة جدًا أو باردة جدًا؟", 
        answer: "الغلاف الجوي الذي يحتوي على غازات الاحتباس الحراري",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو العنصر الذي يعتبر أساسًا في بناء الهيكل العظمي للإنسان؟", 
        answer: "الكالسيوم",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف يمكن تفسير ظاهرة الرياح؟", 
        answer: "من خلال حركة الهواء من مناطق الضغط العالي إلى مناطق الضغط المنخفض",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف يساهم المحيط في عملية التوازن البيئي؟", 
        answer: "من خلال استيعاب الكربون وتنظيم درجة الحرارة",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو المكون الأساسي في تكوين الزهور؟", 
        answer: "الأزهار تحتوي على الأوراق التي تحتوي على خلايا ملونة (تسمى الكلوروفيل) وتساعد في عملية التمثيل الضوئي",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو السبب وراء اختلاف كثافة الهواء في طبقات الغلاف الجوي؟", 
        answer: "بسبب انخفاض درجة الحرارة في الطبقات العليا وزيادة الضغط في الطبقات السفلى",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف يساهم البكتيريا النافعة في جسم الإنسان؟", 
        answer: "من خلال تحسين الهضم وتقوية المناعة",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف يتم تكوين الصخور النارية؟", 
        answer: "من خلال تبريد الصهارة البركانية",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو عنصر الأرض الأكثر شيوعًا في تكوين الغلاف الصخري؟", 
        answer: "السيليكون",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف تساعد الحيوانات في نقل حبوب اللقاح؟", 
        answer: "عن طريق زيارة الزهور لجمع الرحيق وتلقيح الزهور الأخرى",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هي العملية التي يتم خلالها تحويل ضوء الشمس إلى طاقة كيميائية في النباتات؟", 
        answer: "التمثيل الضوئي",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف يمكن للأراضي الرطبة أن تساعد في تقليل الفيضانات؟", 
        answer: "من خلال امتصاص المياه الزائدة في التربة",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو مبدأ آينشتاين الذي يشير إلى العلاقة بين الكتلة والطاقة؟", 
        answer: "المعادلة الشهيرة E=mc²",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف يساهم الأوزون في حماية الأرض؟", 
        answer: "من خلال امتصاص الأشعة فوق البنفسجية الضارة من الشمس",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هي الكائنات الحية التي تنتج الأوكسجين كمنتج ثانوي لعملية التمثيل الضوئي؟", 
        answer: "النباتات والطحالب",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف تعمل الخلايا العصبية في نقل الإشارات عبر الجسم؟", 
        answer: "من خلال التوصيل الكهربائي بين الأعصاب",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو العامل الأساسي الذي يؤثر في سرعة التفاعل الكيميائي؟", 
        answer: "التركيز ودرجة الحرارة",
        answered: false 
      },
      { 
        value: 200, 
        question: "كيف يحدث التسخين العالمي؟", 
        answer: "من خلال تراكم غازات الدفيئة في الغلاف الجوي",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو العنصر الذي يشكل حوالي 25% من وزن الجسم البشري؟", 
        answer: "الكربون",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يُمكن للإنسان أن يتفاعل مع البيئة في حالات الجفاف؟", 
        answer: "من خلال تقليل استهلاك المياه واستخدام تقنيات الري الذكية",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو العنصر الأكثر وفرة في القشرة الأرضية؟", 
        answer: "الأوكسجين",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف تؤثر الطحالب في البيئة البحرية؟", 
        answer: "من خلال إنتاج الأوكسجين واستخدام ثاني أكسيد الكربون",
        answered: false 
      },
      { 
        value: 300, 
        question: "في أي نوع من الصخور تُحفر معظم الأحافير؟", 
        answer: "الصخور الرسوبية",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هي البكتيريا التي تستخدم في صناعة الزبادي؟", 
        answer: "بكتيريا اللاكتوباسيلس",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يمكن للمحيطات أن تؤثر على المناخ؟", 
        answer: "من خلال تنظيم درجة حرارة الأرض عن طريق توزيع الحرارة",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف تعمل خلايا الدم الحمراء في الجسم؟", 
        answer: "من خلال نقل الأوكسجين من الرئتين إلى الأنسجة",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو الدور الذي تلعبه الفطريات في النظم البيئية؟", 
        answer: "من خلال تحلل المواد العضوية وتدوير العناصر الغذائية",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يمكن تفسير ظاهرة الزلازل؟", 
        answer: "من خلال حركة الصفائح التكتونية التي تسبب ضغطًا كبيرًا على القشرة الأرضية",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف تختلف طريقة التنفس في الحيوانات المائية عن الحيوانات البرية؟", 
        answer: "الحيوانات المائية تستخدم الخياشيم بينما تستخدم الحيوانات البرية الرئتين",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يتم امتصاص العناصر الغذائية في النباتات؟", 
        answer: "من خلال الجذور بواسطة التربة والأنابيب الوعائية",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو العضو المسؤول عن توازن السوائل في جسم الإنسان؟", 
        answer: "الكلى",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف تؤثر درجة الحرارة على سرعة التفاعلات الكيميائية؟", 
        answer: "زيادة درجة الحرارة تزيد من سرعة التفاعل",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف تتم عملية الهضم في المعدة؟", 
        answer: "من خلال إفراز الأحماض والإنزيمات التي تساعد في تحطيم الطعام",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو الغاز الذي يمتصه النبات من الجو أثناء عملية التمثيل الضوئي؟", 
        answer: "ثاني أكسيد الكربون",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يتم تنقية الماء في محطات المياه؟", 
        answer: "من خلال الترشيح والتعقيم باستخدام الكلور",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هي الأنسجة التي تُستخدم في نقل الماء والمواد الغذائية في النبات؟", 
        answer: "الأنسجة الوعائية مثل الخشب واللحاء",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يحدث تأثير الدفيئة على كوكب الأرض؟", 
        answer: "من خلال امتصاص الغازات الدفيئة للحرارة المنبعثة من الأرض",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يعمل القلب على ضخ الدم في الجسم؟", 
        answer: "من خلال انقباضات عضلية تخلق ضغطًا يدفع الدم عبر الأوعية الدموية",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هي عملية الانقسام الخلوي التي تؤدي إلى تكوين خلايا جنسية؟", 
        answer: "الانقسام الميوزي",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو الدور الذي تلعبه الشمس في الدورة المائية؟", 
        answer: "من خلال توفير الحرارة التي تساعد في تبخر الماء",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يساعد الحمض النووي في تكوين البروتينات؟", 
        answer: "من خلال توجيه الخلايا لإنتاج الأحماض الأمينية التي تتجمع لتشكل البروتينات",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يؤثر ثاني أكسيد الكربون على البيئة؟", 
        answer: "من خلال مساهمته في ظاهرة الاحتباس الحراري",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يُحسن الإنسان استخدام الطاقة المتجددة في مواجهة التغيرات المناخية؟", 
        answer: "من خلال الاعتماد على الشمس والرياح والمصادر المتجددة الأخرى",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف تعمل الألياف في النباتات على دعم الهيكل الداخلي؟", 
        answer: "من خلال تزويد النباتات بالقوة والمرونة",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف تساهم الخلايا العصبية في نقل الإشارات عبر الجسم؟", 
        answer: "من خلال التوصيل الكهربائي الذي يُنتج إشارات كهربائية",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو العامل الذي يحدد سرعة الرياح؟", 
        answer: "الفرق في الضغط الجوي بين مناطق مختلفة",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف تؤثر الأمطار الحمضية على البيئة؟", 
        answer: "من خلال تلف النباتات والمياه الجوفية والتربة",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يتم تقليل مستويات الملوثات في الهواء؟", 
        answer: "من خلال استخدام تقنيات التصفية والتقنيات الخضراء",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يمكن استخدام التقنيات الحديثة في محاربة التصحر؟", 
        answer: "من خلال استصلاح الأراضي وزراعة الأشجار المقاومة للجفاف",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هي أهمية طبقات الأوزون في حماية الأرض؟", 
        answer: "من خلال امتصاص الأشعة فوق البنفسجية الضارة من الشمس",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يمكن للمياه أن تتحول إلى جليد؟", 
        answer: "من خلال انخفاض درجة الحرارة إلى أقل من نقطة التجمد",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يحدث انتقال الحرارة في الموصلات مثل المعادن؟", 
        answer: "من خلال التوصيل الحراري",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف تتطور الأنواع من خلال عملية الانتقاء الطبيعي؟", 
        answer: "من خلال بقاء الأفراد الأقوى والأكثر تكيفًا في بيئتهم",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يتم تنظيم درجة حرارة الجسم البشري؟", 
        answer: "من خلال آلية التعرق وتوسيع الأوعية الدموية",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف تساهم الأنهار في نقل المواد المغذية إلى المحيطات؟", 
        answer: "من خلال جريان المياه التي تحمل المواد المغذية من اليابسة إلى البحر",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يساهم تنوع الأنواع في الحفاظ على التوازن البيئي؟", 
        answer: "من خلال توفير روابط في السلسلة الغذائية وضمان استقرار النظم البيئية",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يؤثر التلوث الضوضائي على الحياة البرية؟", 
        answer: "من خلال التأثير على قدرة الحيوانات على التواصل والعثور على الطعام",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف تساهم البحار والمحيطات في تنظيم درجة الحرارة على سطح الأرض؟", 
        answer: "من خلال امتصاص الحرارة وتوزيعها عبر التيارات البحرية",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يساهم ضغط الغازات في الغلاف الجوي في حماية كوكب الأرض؟", 
        answer: "من خلال احتباس الحرارة في الغلاف الجوي لتدفئة الأرض",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يمكن تقليل التلوث البلاستيكي في المحيطات؟", 
        answer: "من خلال تقليل الاستخدام والتخلص الآمن من البلاستيك",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف تؤثر العواصف الشمسية على الأرض؟", 
        answer: "من خلال تأثيرها على الاتصالات وأنظمة الأقمار الصناعية",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف تساهم الأمطار في تغذية النباتات؟", 
        answer: "من خلال توفير المياه التي تحتاجها النباتات للنمو",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يمكن قياس مستوى الحموضة في المواد؟", 
        answer: "باستخدام مقياس الأس الهيدروجيني (pH)",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يمكن للطيور أن تحلق على ارتفاعات عالية؟", 
        answer: "من خلال استخدام أجنحتها التي توفر رفعًا كافيًا وتساهم في التحكم بالحرارة",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يؤدي التلوث إلى تغيرات في الأنظمة البيئية؟", 
        answer: "من خلال التأثير على جودة المياه والهواء والنباتات والحيوانات",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف تساهم عملية التمثيل الضوئي في خلق توازن في النظام البيئي؟", 
        answer: "من خلال إنتاج الأوكسجين والتغذية النباتية",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هي الميكروبات التي تساهم في تجديد التربة؟", 
        answer: "البكتيريا والفطريات",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف تؤثر درجات الحرارة على المحيطات؟", 
        answer: "من خلال زيادة أو تقليل النشاط البيولوجي في المحيطات",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف تساهم التيارات البحرية في نقل الحرارة من المناطق الاستوائية إلى القطبين؟", 
        answer: "من خلال تحريك المياه الساخنة نحو المناطق الباردة والمياه الباردة نحو المناطق الدافئة",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن لعلماء الفلك أن يحددوا عمر النجوم؟", 
        answer: "من خلال دراسة اللون والطيف الضوئي ومراحل التطور النجمي",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يحدث التحول من غاز إلى سائل؟", 
        answer: "عن طريق التكثف عندما تنخفض درجة الحرارة",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف تؤثر الرياح الشمسية على الكواكب الخارجية؟", 
        answer: "من خلال تشكيل هالة مغناطيسية حول هذه الكواكب وتسبب فقدان الغلاف الجوي",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هو الدور الذي تلعبه الفطريات في تربة الغابات الاستوائية؟", 
        answer: "من خلال تحلل المواد العضوية وإعادة تدوير العناصر الغذائية في التربة",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن للميكروبات أن تساهم في تخفيف التلوث؟", 
        answer: "من خلال تكسير المواد السامة وتحويلها إلى مواد غير ضارة",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هي العمليات التي تؤدي إلى تكوين البراكين؟", 
        answer: "من خلال تحركات الصفائح التكتونية التي تتسبب في صعود الصهارة إلى سطح الأرض",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن قياس سرعة الضوء باستخدام تقنية الفوتونات؟", 
        answer: "من خلال قياس الزمن الذي يستغرقه الفوتون للانتقال عبر مسافة معينة",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن للمحاكاة الحاسوبية أن تساعد في فهم تغيرات المناخ؟", 
        answer: "من خلال نمذجة العمليات الطبيعية والتنبؤ بتأثيرات الغازات الدفيئة على درجات الحرارة",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن لحركة الصفائح التكتونية أن تؤثر على تكوين السلاسل الجبلية؟", 
        answer: "من خلال تصادم الصفائح وتسببها في رفع الأرض وتشكيل الجبال",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن قياس عمر الأرض باستخدام تأريخ الصخور؟", 
        answer: "من خلال استخدام نظائر مشعة مثل اليورانيوم والراديوم",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يتم استخدام الحفريات في تحديد تاريخ الأرض؟", 
        answer: "من خلال دراسة الطبقات الصخرية والتسلسل الزمني للأحافير",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هو تأثير الانبعاثات الصناعية على تركيب الغلاف الجوي؟", 
        answer: "من خلال زيادة تركيز غازات الدفيئة مثل ثاني أكسيد الكربون الذي يساهم في الاحتباس الحراري",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن استخدام علم الوراثة لفهم التنوع البيولوجي؟", 
        answer: "من خلال مقارنة الجينات بين الأنواع المختلفة وتحليل التطور الجيني",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن للأشعة السينية أن تساعد في فحص بنية المواد؟", 
        answer: "من خلال استخدام الأشعة السينية لاختراق المواد والتفاعل مع الإلكترونات في الذرات لتكوين صور",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يؤثر الرياح على تشكيل الكثبان الرملية في الصحراء؟", 
        answer: "من خلال نقل الرمال عبر الرياح وتراكمها لتشكيل الكثبان",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن استخدام الألياف الضوئية في نقل البيانات؟", 
        answer: "من خلال تمرير الضوء عبر كابلات مصنوعة من الزجاج أو البلاستيك لنقل الإشارات",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف تحدث ظاهرة التلوث الضوضائي في المدن الكبرى؟", 
        answer: "من خلال تراكم الأصوات الناتجة عن النقل والصناعة والتكنولوجيا",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن حساب الكثافة باستخدام معادلات الفيزياء؟", 
        answer: "من خلال قسمة الكتلة على الحجم",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن لتقنيات الطاقة المتجددة أن تقضي على الاعتماد على الوقود الأحفوري؟", 
        answer: "من خلال التحول إلى مصادر طاقة نظيفة مثل الرياح والشمس والمياه",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف تؤثر الطاقة النووية في إنتاج الكهرباء؟", 
        answer: "من خلال انشطار الذرات في المفاعلات النووية لتوليد الحرارة التي تُستخدم لتوليد الكهرباء",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يحدث تحول المادة من الحالة السائلة إلى الحالة الصلبة؟", 
        answer: "من خلال انخفاض درجة الحرارة وزيادة القوى الجذبية بين الجزيئات",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف تعمل الميكروبات في معالجة مياه الصرف الصحي؟", 
        answer: "من خلال تكسير المواد العضوية وتحويلها إلى مكونات غير ضارة",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هي الآلية التي يتم بها استقلاب الطعام في الجسم؟", 
        answer: "من خلال تفاعلات كيميائية تحول المواد الغذائية إلى طاقة",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن للحيوانات أن تتأقلم مع البيئات القاسية مثل الصحارى والقطب الشمالي؟", 
        answer: "من خلال تطوير تكيفات فسيولوجية وسلوكية مثل تخزين المياه أو العزل الحراري",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يحدث العبور الجيني أثناء الانقسام الميوزي؟", 
        answer: "من خلال تبادل الأجزاء بين الكروموسومات المتماثلة أثناء تشكيل الخلايا الجنسية",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يتم تفسير ظاهرة الفصول الأربعة على الأرض؟", 
        answer: "من خلال ميل محور الأرض أثناء دورانها حول الشمس مما يؤثر على كمية أشعة الشمس التي تصل إلى كل نصف الكرة",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يتم استخدام الطاقة الحركية لتوليد الكهرباء؟", 
        answer: "من خلال توربينات أو مولدات تحول الطاقة الحركية إلى طاقة كهربائية",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن للطاقة الحرارية أن تساهم في توليد الكهرباء؟", 
        answer: "من خلال تحويل الحرارة الناتجة عن الوقود أو الطاقة الشمسية إلى طاقة ميكانيكية تستخدم لتوليد الكهرباء",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يعمل الدماغ في معالجة المعلومات الحسية؟", 
        answer: "من خلال إرسال الإشارات الكهربائية عبر الأعصاب إلى الدماغ الذي يترجمها إلى إحساسات وتصورات",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف تتشكل الجبال تحت تأثير القوى التكتونية؟", 
        answer: "من خلال التصادم بين الصفائح التكتونية مما يؤدي إلى رفع الأرض وتشكيل الجبال",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن لحركة الأمواج في المحيط أن تؤثر على بيئة الشعاب المرجانية؟", 
        answer: "من خلال حمل المغذيات وتهوية المياه المحيطة بها",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف تؤثر المواد المشعة على الخلايا الحية؟", 
        answer: "من خلال التأثير على الحمض النووي مما يؤدي إلى تلف الخلايا أو الإصابة بالأمراض",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف تساعد النباتات في تخزين الكربون؟", 
        answer: "من خلال امتصاص ثاني أكسيد الكربون خلال عملية التمثيل الضوئي وتحويله إلى مواد عضوية",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن للبكتيريا أن تكون مفيدة في معالجة المواد السامة؟", 
        answer: "من خلال تحطيم المواد الكيميائية السامة إلى مركبات غير ضارة في البيئة",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن استخدام الأبحاث الوراثية في علاج الأمراض الوراثية؟", 
        answer: "من خلال تعديل الجينات المصابة باستخدام تقنيات مثل العلاج الجيني",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن للميكروبات أن تتحلل المواد العضوية في التربة؟", 
        answer: "من خلال استخدام الإنزيمات لتفكيك المركبات العضوية وتحويلها إلى مغذيات",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن لعلماء الفلك قياس المسافات بين النجوم؟", 
        answer: "من خلال قياس الانزياح الأحمر وتطبيق القوانين الفلكية",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف تتفاعل الغازات الدفيئة مع الأشعة تحت الحمراء؟", 
        answer: "من خلال امتصاص الإشعاع تحت الأحمر ومن ثم إعادة إصداره إلى الأرض مما يزيد من درجة الحرارة",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن استخدام التقنيات الجينية لتحسين المحاصيل الزراعية؟", 
        answer: "من خلال تعديل الجينات لزيادة مقاومة المحاصيل للأمراض أو تحسين جودتها",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف تعمل الأنظمة البيئية في الحفاظ على التوازن البيولوجي؟", 
        answer: "من خلال تنظيم العلاقات بين الأنواع المختلفة وتدوير المغذيات والطاقة",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن استخدام الميكروبات في إنتاج الوقود الحيوي؟", 
        answer: "من خلال تحويل المواد العضوية إلى كحول أو غازات قابلة للاحتراق",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يساهم الخلايا الجذعية في العلاجات الطبية؟", 
        answer: "من خلال قدرة الخلايا الجذعية على التمايز إلى أنواع خلايا مختلفة لعلاج الأمراض",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف تؤثر الأنشطة البشرية على التنوع البيولوجي؟", 
        answer: "من خلال تدمير المواطن الطبيعية والتسبب في انقراض العديد من الأنواع",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يتم التحكم في عملية التفاعل الكيميائي في المصانع؟", 
        answer: "من خلال مراقبة الظروف مثل درجة الحرارة والضغط واستخدام المحفزات",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن استخدام الموجات الصوتية في التشخيص الطبي؟", 
        answer: "من خلال تقنيات مثل التصوير بالموجات فوق الصوتية لتوفير صور مفصلة للأعضاء الداخلية",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن للأنظمة البيئية أن تستعيد التوازن بعد كارثة بيئية؟", 
        answer: "من خلال العمليات البيولوجية التي تساعد في تجديد الأنواع النباتية والحيوانية",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يساعد النظام الدوري للعناصر في فهم تركيب المواد؟", 
        answer: "من خلال ترتيب العناصر بحسب خصائصها الكيميائية والفيزيائية",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن لمصادر الطاقة المتجددة أن تعوض عن الوقود الأحفوري؟", 
        answer: "من خلال توفير طاقة مستدامة من مصادر مثل الشمس والرياح التي لا تؤثر سلبًا على البيئة",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن للأشجار أن تساعد في تحسين نوعية الهواء؟", 
        answer: "من خلال امتصاص الملوثات مثل ثاني أكسيد الكربون والجسيمات العالقة",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم العملية التي ينتقل فيها الجسم الصلب مباشرة إلى غاز دون المرور بالحالة السائلة؟", 
        answer: "التبخر",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي إنزيم مسؤول عن فك لولب الحمض النووي أثناء النسخ؟", 
        answer: "هيليكاز",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم الطاقة اللازمة لرفع درجة حرارة جرام واحد من الماء درجة مئوية واحدة؟", 
        answer: "سعر حراري",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم البروتين في الدم الذي يحمل الأوكسجين؟", 
        answer: "الهيموغلوبين",
        answered: false 
      },
      { 
        value: 500, 
        question: "في علم الوراثة، ماذا يعني الاختصار SNP؟", 
        answer: "تعدد الأشكال النوكليوتيدية المفردة",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو الاسم الكيميائي للصدأ؟", 
        answer: "أكسيد الحديد",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو العنصر الأكثر كهرسلبية في الجدول الدوري؟", 
        answer: "الفلور",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم النظرية التي تشرح كيف تتحرك القارات عبر سطح الأرض؟", 
        answer: "تكتونية الصفائح",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم العملية التي يفقد فيها النبات الماء من خلال فتحات صغيرة في أوراقه؟", 
        answer: "النتح",
        answered: false 
      },
      { 
        value: 500, 
        question: "A، C، و T، هي ثلاث من الحروف المستخدمة لتمثيل أجزاء الحمض النووي. ما هو الرابع؟", 
        answer: "G",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم الظاهرة التي يتغير فيها الضوء عندما يمر من وسط إلى وسط آخر؟", 
        answer: "الانكسار",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو المصطلح للطاقة المخزنة في الروابط الكيميائية؟", 
        answer: "الطاقة الكيميائية الكامنة",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم الحمض النووي الذي يعمل كرسالة في تصنيع البروتين؟", 
        answer: "mRNA (الحمض النووي الريبوزي المرسال)",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم العملية التي يتم فيها تكسر الصخور بواسطة التفاعلات الكيميائية؟", 
        answer: "التجوية الكيميائية",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو المصطلح للطاقة المطلوبة لإزالة الإلكترون من ذرة في حالتها الغازية؟", 
        answer: "طاقة التأين",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم نوع الرابطة الكيميائية التي تتشكل عندما يتشارك الذرات الإلكترونات؟", 
        answer: "الرابطة التساهمية",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم العملية التي يقوم فيها بعض الكائنات الحية بتحويل النيتروجين الجوي إلى أشكال بيولوجية قابلة للاستخدام؟", 
        answer: "تثبيت النيتروجين",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو المصطلح لقياس الفوضى أو العشوائية في النظام؟", 
        answer: "الإنتروبيا",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما نوع السحابة التي ترتبط بالعواصف الرعدية؟", 
        answer: "سحابة الركام",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو الحد الفاصل بين صفائح تكتونية؟", 
        answer: "خط الصدع",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو الكائن الحي الذي يمتلك أطول فترة حمل؟", 
        answer: "الفيل الإفريقي",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو أكبر أنواع الدببة؟", 
        answer: "الدب القطبي",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم المجموعة التي ينتمي إليها طائر الببغاء؟", 
        answer: "التمرد",
        answered: false 
      },
      { 
        value: 500, 
        question: "كم عدد أرجل جراد البحر؟", 
        answer: "عشرة",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اللون الذي يكون عليه جلد دب قطبي؟", 
        answer: "أسود",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو الوحش الكبير الوحيد الذي لا يزأر؟", 
        answer: "الفهد",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي الثدييات تمتلك أكثر الفراء سمكًا؟", 
        answer: "قضاعة البحر",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو أسرع طائر؟", 
        answer: "الصقر الجوال",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي حيوان يضع أكبر بيضة؟", 
        answer: "النعامة",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي نوع من الأشجار لا يفقد أوراقه في الشتاء؟", 
        answer: "دائمة الخضرة",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم العملية التي يتم فيها تفكيك الصخور بواسطة الرياح أو الماء أو الجليد؟", 
        answer: "التعرية",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم أعمق مكان في المحيط؟", 
        answer: "خندق ماريانا",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو المصطلح للكائنات الحية التي يمكنها التزاوج وإنتاج ذرية خصبة؟", 
        answer: "نوع",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو المصطلح للكائن الذي يعيش في ارتباط وثيق مع كائن آخر من نوع مختلف؟", 
        answer: "متعايش",
        answered: false 
      },
      { 
        value: 500, 
        question: "علم الفطريات هو الدراسة العلمية لأي كائنات حية؟", 
        answer: "الفطريات",
        answered: false 
      },
      { 
        value: 500, 
        question: "كم عدد العظام في رقبة الزرافة؟", 
        answer: "سبعة",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو أصغر ثديي في العالم؟", 
        answer: "خفاش النحل",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي ثديي يمتلك أقوى عضّة؟", 
        answer: "فرس النهر",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو أخطر حيوان على البشر؟", 
        answer: "البعوض",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي حيوان يمكن لسانه أن يكون طوله مثل جسمه؟", 
        answer: "الحرباء",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو نوع السحابة التي تتكون في الغالب أثناء العواصف الرعدية؟", 
        answer: "سحابة الركام",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو المصطلح الذي يطلق على مجموعة من الكائنات الحية التي يمكن أن تتكاثر معًا وتنتج ذرية خصبة؟", 
        answer: "نوع",
        answered: false 
      },
      { 
        value: 500, 
        question: "كم عدد العظام في جسم الإنسان البالغ؟", 
        answer: "206",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو العضو المسؤول عن إنتاج الأنسولين؟", 
        answer: "البنكرياس",
        answered: false 
      },
      { 
        value: 500, 
        question: "كم عدد أزواج الأضلاع في جسم الإنسان؟", 
        answer: "12 زوجًا",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو الجزء الذي يحتوي على أصغر عظام في جسم الإنسان؟", 
        answer: "الأذن",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم العملية التي تنقسم خلالها الخلايا لتنتج خلايا متماثلة؟", 
        answer: "الانقسام المتساوي",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو نوع الخلايا التي تحتوي على حمض نووي داخل نواة؟", 
        answer: "الخلايا حقيقية النواة",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو المصطلح الذي يطلق على العوامل التي تسهم في ظهور الأنواع الجديدة من الكائنات الحية؟", 
        answer: "الانتقاء الطبيعي",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي جزء من الجسم يعمل على تعديل الطاقة الضوئية؟", 
        answer: "العين",
        answered: false 
      }
    ]
  },
  {
    id: 'geography',
    name: 'الجغرافيا',
    icon: '🌍',
    questions: [
      { 
        value: 100, 
        question: "أين ستكون إذا كنت واقفًا على السلالم الإسبانية؟", 
        answer: "روما",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي مدينة تعرف باسم \"المدينة الأبدية\"؟", 
        answer: "روما",
        answered: false 
      },
      { 
        value: 100, 
        question: "صح أم خطأ: نشأت هالوين كعيد إيرلندي قديم؟", 
        answer: "صح",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي عاصمة نيويورك؟", 
        answer: "ألباني",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي عاصمة أيرلندا؟", 
        answer: "دبلن",
        answered: false 
      },
      { 
        value: 100, 
        question: "صح أم خطأ: هولندا هي منطقة في هولندا؟", 
        answer: "صح",
        answered: false 
      },
      { 
        value: 100, 
        question: "أكمل الفراغ: عاصمة بلغاريا هي وفي؟", 
        answer: "صوفيا",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي عاصمة كندا؟", 
        answer: "أوتاوا",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي ألوان علم الأمم المتحدة؟", 
        answer: "الأزرق والأبيض",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي عاصمة السلفادور؟", 
        answer: "سان سلفادور",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو المصطلح الجغرافي المناسب لتجمع أو سلسلة من الجزر؟", 
        answer: "أرخبيل",
        answered: false 
      },
      { 
        value: 100, 
        question: "البحيرات الكبرى تتكون من كم جسم مائي؟", 
        answer: "5",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي مدينة أمريكية تعرف بـ \"مدينة الملائكة\"؟", 
        answer: "لوس أنجلوس",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي عاصمة أفغانستان؟", 
        answer: "كابول",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي عاصمة الولايات المتحدة؟", 
        answer: "واشنطن العاصمة",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي عاصمة السنغال؟", 
        answer: "داكار",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي عاصمة إسبانيا؟", 
        answer: "مدريد",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي عاصمة اليونان؟", 
        answer: "أثينا",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو اسم برج الساعة الشهير هذا: بيغ بن، برج توم، أو برج ترافالغار؟", 
        answer: "بيغ بن",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي عاصمة إيطاليا؟", 
        answer: "روما",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي دولة تقع قمة جبل كليمنجارو؟", 
        answer: "تنزانيا",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أستراليا، ماذا يُسمى محل بيع الخمور؟", 
        answer: "متجر الخمور",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي نهر يمر عبر الوادي العظيم؟", 
        answer: "نهر كولورادو",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هي أصغر ولاية أمريكية من حيث المساحة؟", 
        answer: "رود آيلاند",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي قارة تجد مدينة باكو؟", 
        answer: "آسيا",
        answered: false 
      },
      { 
        value: 200, 
        question: "أين تجد نهري دجلة والفرات: في أوروبا، آسيا، أو أستراليا؟", 
        answer: "آسيا",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي ولاية أمريكية تعرف باسم \"ولاية الخط القديم\"؟", 
        answer: "ماريلاند",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي دولة آسيوية هي موطن معبد شاولين، القصر الصيفي، والمدينة المحرمة؟", 
        answer: "الصين",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو أعلى جبل في إفريقيا؟", 
        answer: "جبل كليمنجارو",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي محيط يقع على الساحل الغربي للولايات المتحدة؟", 
        answer: "المحيط الهادئ",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي ولاية يمكن العثور على جراند كانيون؟", 
        answer: "أريزونا",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هي عاصمة سورينام؟", 
        answer: "باراماريبو",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي مدينة أمريكية تعرف بـ \"مدينة النوافير\"؟", 
        answer: "مدينة كانساس",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو النوع من التضاريس المسطحة والمرتفعة التي تبرز بشدة فوق الأرض المجاورة؟", 
        answer: "هضبة",
        answered: false 
      },
      { 
        value: 200, 
        question: "أين تقع غيانا؟", 
        answer: "أمريكا الجنوبية",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي دولة أفريقية مشهورة بكونها موطن الأهرامات الكبرى في الجيزة وأبو الهول؟", 
        answer: "مصر",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هي أكبر قارة من حيث المساحة؟", 
        answer: "آسيا",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي دولة مكونة من 7000 جزيرة؟", 
        answer: "الفلبين",
        answered: false 
      },
      { 
        value: 200, 
        question: "أين تقع مولدوفا؟", 
        answer: "أوروبا",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي محيط بين أمريكا الشمالية وأفريقيا؟", 
        answer: "المحيط الأطلسي",
        answered: false 
      },
      { 
        value: 200, 
        question: "أين توجد تشيلي؟", 
        answer: "أمريكا الجنوبية",
        answered: false 
      },
      { 
        value: 200, 
        question: "كم عدد الدول في أمريكا الشمالية؟", 
        answer: "23",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي دولة تقع تقريبًا 90 ميلًا جنوب شرق فلوريدا؟", 
        answer: "كوبا",
        answered: false 
      },
      { 
        value: 200, 
        question: "أين توجد منغوليا؟", 
        answer: "آسيا",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي سلسلة جبلية توجد على الجانب الشرقي للولايات المتحدة؟", 
        answer: "جبال الأبلاش",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي ولاية تقع بين كاليفورنيا وواشنطن؟", 
        answer: "أوريغون",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هي عاصمة نيو هامبشاير؟", 
        answer: "كونكورد",
        answered: false 
      },
      { 
        value: 200, 
        question: "أين توجد مدينة فاليتا؟", 
        answer: "مالطا",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هي عاصمة بنسلفانيا؟", 
        answer: "هاريسبرغ",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي بحيرة ليست من البحيرات الكبرى: سوبيريور، هورون، أو شامبلين؟", 
        answer: "شامبلين",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي دولة توجد بحيرة موراين؟", 
        answer: "كندا",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هي الأداة التي تقيس المسافة شمال أو جنوب خط الاستواء؟", 
        answer: "خط العرض",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هي أكبر مدينة ناطقة بالإسبانية في العالم؟", 
        answer: "مكسيكو سيتي",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي قارة تحتوي على أراضٍ في جميع النصفين الشرقي والغربي؟", 
        answer: "إفريقيا",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو أطول نوع من الأشجار؟", 
        answer: "شجرة السيكويا",
        answered: false 
      },
      { 
        value: 300, 
        question: "كم عاصمة أوروبية يمر بها نهر الدانوب؟", 
        answer: "4",
        answered: false 
      },
      { 
        value: 300, 
        question: "في أي عاصمة يمكن العثور على تمثال الحورية الصغيرة؟", 
        answer: "كوبنهاغن",
        answered: false 
      },
      { 
        value: 300, 
        question: "كم عدد النجوم على العلم الصيني؟", 
        answer: "5",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي سلسلة جبلية تفصل بين أوروبا وآسيا؟", 
        answer: "جبال الأورال",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو أكبر بركان نشط على الأرض؟", 
        answer: "ماونا لوا",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي دولة تعرف باسم \"أرض الألف بحيرة\"؟", 
        answer: "فنلندا",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي دولة آسيوية تعرف بـ \"أرض التنين الرعد\"؟", 
        answer: "بوتان",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو النقطة الأكثر جنوبًا في إفريقيا؟", 
        answer: "كيب أغولهاس",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هي ثاني أكبر جزيرة في العالم وهي جزء من إندونيسيا؟", 
        answer: "غينيا الجديدة",
        answered: false 
      },
      { 
        value: 300, 
        question: "كم عدد سكان نيوزيلندا؟", 
        answer: "حوالي 5 مليون",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هي أصغر قارة من حيث المساحة؟", 
        answer: "أستراليا",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هي أكبر جزيرة في البحر الأبيض المتوسط؟", 
        answer: "صقلية",
        answered: false 
      },
      { 
        value: 300, 
        question: "في أي دولة تقع صحراء كالاهاري؟", 
        answer: "بوتسوانا",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي دولة أفريقية هي الأكثر سكانًا؟", 
        answer: "نيجيريا",
        answered: false 
      },
      { 
        value: 300, 
        question: "أين توجد مالطا؟", 
        answer: "أوروبا",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي دولة أوروبية تعرف بالفجور وهي موطن الفايكنج؟", 
        answer: "النرويج",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي سلسلة جبلية تمتد على الساحل الغربي لأمريكا الجنوبية؟", 
        answer: "جبال الأنديز",
        answered: false 
      },
      { 
        value: 300, 
        question: "في أي دولة يمكن العثور على الشعاب المرجانية الكبرى؟", 
        answer: "أستراليا",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي دولة تحتوي على أكبر عدد من الأهرامات؟", 
        answer: "السودان",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي نهر يمر من مينابوليس إلى ممفيس إلى نيو أورلينز؟", 
        answer: "نهر المسيسيبي",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي ولاية من الشمال الشرقي لم تكن واحدة من المستعمرات الـ13 الأصلية؟", 
        answer: "مين",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي مدينة بها ثاني أكبر عدد من السكان؟", 
        answer: "دلهي",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي مدينة في أمريكا الشمالية لديها عدد سكان أكبر: لوس أنجلوس أو مكسيكو سيتي؟", 
        answer: "مكسيكو سيتي",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي دولة لديها أكبر عدد من الجزر؟", 
        answer: "السويد (270,000 جزيرة)",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي ولاية أمريكية يقع أكثر المطارات ازدحامًا في البلاد؟", 
        answer: "جورجيا (مطار هارتسفيلد جاكسون أتلانتا الدولي)",
        answered: false 
      },
      { 
        value: 400, 
        question: "أين تقع شلالات أنجل، أكبر شلالات في العالم؟", 
        answer: "فنزويلا",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي قارة تقع أكبر صحراء في العالم؟", 
        answer: "القارة القطبية الجنوبية",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هو العلم الوحيد الذي لا يحتوي على أربع جوانب؟", 
        answer: "نيبال",
        answered: false 
      },
      { 
        value: 400, 
        question: "كم عدد الألوان المستخدمة في العلم الجنوب أفريقي؟", 
        answer: "6",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي دولة تضم حطام سفينة على علمها؟", 
        answer: "برمودا",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي دولة يقع محطة تشيرنوبيل النووية؟", 
        answer: "أوكرانيا",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي صحراء تحمل الرقم القياسي لأعلى درجة حرارة جوية تم قياسها؟", 
        answer: "وادي الموت في كاليفورنيا",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي سلسلة جبلية تجد قمة K2، ثاني أعلى قمة في العالم؟", 
        answer: "سلسلة جبال قراقرم",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي دولة تجد أكبر مسطح ملحي في العالم، سالار دي أويوني؟", 
        answer: "بوليفيا",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي مضيق يفصل بين السعودية وأفريقيا؟", 
        answer: "باب المندب",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي نهر يشكل جزءًا من الحدود بين الولايات المتحدة والمكسيك؟", 
        answer: "نهر ريو غراندي",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هي الدولة الوحيدة في العالم التي هي قارة أيضًا؟", 
        answer: "أستراليا",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي دولة تعرف باسم \"أرض النار والجليد\" بسبب براكينها وجبالها الجليدية؟", 
        answer: "آيسلندا",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هو اسم هذا الموقع؟", 
        answer: "ستونهنج",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي نهر يُطلق عليه \"أب المياه\" وهو أطول نهر في أمريكا الشمالية؟", 
        answer: "نهر المسيسيبي",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هي أكثر مدينة سكانًا في العالم؟", 
        answer: "طوكيو، اليابان",
        answered: false 
      },
      { 
        value: 400, 
        question: "أين يقع أكبر بحيرة تحت الأرض في العالم؟", 
        answer: "ناميبيا",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي محيط يقع مثلث برمودا؟", 
        answer: "المحيط الأطلسي",
        answered: false 
      },
      { 
        value: 400, 
        question: "أين توجد منحدرات موهير؟", 
        answer: "أيرلندا",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هي البحيرات الكبرى الخمس؟", 
        answer: "سوبيريور، ميشيغان، هورون، إيري، وأونتاريو",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي بحر هو الوحيد الذي لا يحتوي على سواحل؟", 
        answer: "بحر سارجاسو",
        answered: false 
      },
      { 
        value: 500, 
        question: "في أي ولاية أمريكية يلتقي الولايات الأربع في نصب الزوايا الأربع؟", 
        answer: "أريزونا، نيو مكسيكو، يوتا، كولورادو",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي بحر هو أصغر وأقل عمقًا في العالم؟", 
        answer: "بحر أزوف",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هي أقصى عاصمة شمالية في العالم؟", 
        answer: "ريكيافيك، آيسلندا",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هي أعلى نقطة على الأرض؟", 
        answer: "جبل إيفرست",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي محيط هو الأكبر والأعمق؟", 
        answer: "المحيط الهادئ",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هي أكبر صحراء في العالم؟", 
        answer: "صحراء الصحراء الكبرى",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي نوع من الخرائط يستخدم الخطوط المضلعة لربط النقاط التي تكون في نفس الارتفاع؟", 
        answer: "الخريطة الطبوغرافية",
        answered: false 
      },
      { 
        value: 500, 
        question: "كم عدد الدول التي توجد في أفريقيا؟", 
        answer: "54",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هي أصغر دولة في العالم؟", 
        answer: "الفاتيكان",
        answered: false 
      },
      { 
        value: 500, 
        question: "هل خط الزوال هو الخط الذي يبلغ 0 درجة طولًا أو 0 درجة عرضًا؟", 
        answer: "خط الطول 0 درجة",
        answered: false 
      }
    ]
  },
  {
    id: 'sports',
    name: 'الرياضة والألعاب',
    icon: '⚽',
    questions: [
      { 
        value: 100, 
        question: "من هو صاحب أسرع هاترك في الدوري الإنجليزي الممتاز؟", 
        answer: "ساديو ماني (دقيقتان ٥٦ ثانية لساوثامبتون ضد أستون فيلا في ٢٠١٥)",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو اللاعب الذي لعب أكبر عدد من المباريات في الدوري الإنجليزي الممتاز (برصيد ٦٥٣ مباراة)؟", 
        answer: "جاريث باري",
        answered: false 
      },
      { 
        value: 100, 
        question: "برصيد ٢٦٠ هدفاً، من هو أفضل هداف في تاريخ الدوري الإنجليزي الممتاز؟", 
        answer: "آلان شيرير",
        answered: false 
      },
      { 
        value: 100, 
        question: "متى كان الموسم الافتتاحي للدوري الإنجليزي الممتاز؟", 
        answer: "١٩٩٢-١٩٩٣",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي فريق فاز بلقب الدوري الإنجليزي الأول؟", 
        answer: "مانشستر يونايتد",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم البطولة الاولى لكأس العالم؟", 
        answer: "كأس جول ريميه / النصر",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي بلد فاز بأول كأس عالم في عام ١٩٣٠؟", 
        answer: "أوروجواي",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو لاعب كرة القدم السويدي الذي أدرج بندًا في عقد الدوري الإنجليزي الذي منعه من السفر إلى الفضاء؟", 
        answer: "ستيفان شوارز",
        answered: false 
      },
      { 
        value: 100, 
        question: "من قام بغناء أغنية يورو ٩٦ أغنية \"ثلاثة أسود\" كعمل كوميدي مزدوج؟", 
        answer: "ديفيد بادديل وفرانك سكينر",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو اسم الفندق الذي عاش فيه جوزيه مورينيو عندما كان يدير مانشستر يونايتد؟", 
        answer: "فندق لوري",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي موسم تم تغيير اسم كأس أوروبا ليصبح دوري أبطال أوروبا؟", 
        answer: "١٩٩٢-١٩٩٣",
        answered: false 
      },
      { 
        value: 100, 
        question: "متى كانت النسخة الأولى من كأس أمم أوروبا؟", 
        answer: "1960",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو اسم كأس اليورو؟", 
        answer: "هنري ديلوناي",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي حيوان متواجد على شعار كولون؟", 
        answer: "الجدي",
        answered: false 
      },
      { 
        value: 100, 
        question: "لايبزيج يعرف باسم ...؟", 
        answer: "الريد بولز",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو لقب بوروسيا مونشنجلادباخ؟", 
        answer: "المُهر",
        answered: false 
      },
      { 
        value: 200, 
        question: "يشارك ثلاثة لاعبين الرقم القياسي لمعظم البطاقات الحمراء في الدوري الإنجليزي الممتاز (٨). من هم هؤلاء اللاعبون؟", 
        answer: "باتريك فييرا، ريتشارد دن، ودنكان فيرجسون",
        answered: false 
      },
      { 
        value: 200, 
        question: "مع ٢٠٢ مباراة نظيفة، أي حارس مرمى لديه أفضل سجل في الدوري الإنجليزي الممتاز؟", 
        answer: "بيتر سيش",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي بلد فاز بأكبر عدد من بطولات كأس العالم؟", 
        answer: "البرازيل",
        answered: false 
      },
      { 
        value: 200, 
        question: "فازت ثلاث دول بالمونديال مرتين. يمكنك تسميتهم؟", 
        answer: "الأرجنتين، فرنسا، وأوروغواي",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي بطولة كأس عالم سجل فيها دييغو مارادونا هدفه الشهير \"باليد\"؟", 
        answer: "المكسيك ١٩٨٦",
        answered: false 
      },
      { 
        value: 200, 
        question: "الرقم القياسي لأهداف كأس العالم هو ١٦، من سجله؟", 
        answer: "ميروسلاف كلوزه",
        answered: false 
      },
      { 
        value: 200, 
        question: "فاز لاعبان إنجليزيان بالحذاء الذهبي لكأس العالم. من هؤلاء؟", 
        answer: "جاري لينيكر (١٩٨٦) وهاري كين (٢٠١٨)",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي لاعب كرة قدم حائز على جائزة الكرة الذهبية كان لديه مجرة ​​سميت باسمه في عام ٢٠١٥؟", 
        answer: "كريستيانو رونالدو - Galaxy Cosmos Redshift 7 (CR7)",
        answered: false 
      },
      { 
        value: 200, 
        question: "هل يمكنك تسمية الألماني الدولي السابق الذي أصبح مصارعًا محترفًا في WWE؟", 
        answer: "تيم ويس",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي من اللاعبين الدوليين السابقين في إنجلترا وصل إلى المرتبة ١٢ في ترتيب الأغاني في المملكة المتحدة مع أغنية ١٩٨٧ Diamond Lights عام ١٩٨٧؟", 
        answer: "كريس وادل وجلين هودل (باسم \"جلن وكريس\")",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي لقب للنادي الإسباني هو لوس كولشونيروس ، الذي يترجم إلى الإنجليزية باسم \"The Mattress Makers\"؟", 
        answer: "أتلتيكو مدريد",
        answered: false 
      },
      { 
        value: 200, 
        question: "ماهو نادي كرة القدم الذي كان صاحبه نجم الروك الإنجليزي التون جون مرتين؟", 
        answer: "واتفورد",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الفريق الأول من المملكة المتحدة الذي فاز بكأس أوروبا؟", 
        answer: "سلتيك (١٩٦٦-١٩٦٧)",
        answered: false 
      },
      { 
        value: 200, 
        question: "فاز ليفربول بستة دوري أبطال أوروبا، وفاز مانشستر يونايتد بثلاثة، لكن من هم ثالث أنجح فريق من إنجلترا في المسابقة بلقبين؟", 
        answer: "غابة نوتنغهام (١٩٧٨-٧٩ و١٩٧٩-٨٠)",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو المنتخب الأكثر فوزًا بكأس أمم أوروبا؟", 
        answer: "ألمانيا وإسبانيا",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو أكثر لاعب سجل في نسخة واحدة من كأس أمم أوروبا؟", 
        answer: "ميشيل بلاتيني في يورو 84",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي من هذه المنتخبات لم يفز بكأس أمم أوروبا من قبل: الدنمارك، بلجيكا، واليونان؟", 
        answer: "بلجيكا",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي عام زادت المنتخبات المشاركة في كأس أمم أوروبا من 16 إلى 24؟", 
        answer: "يورو 2016",
        answered: false 
      },
      { 
        value: 200, 
        question: "قام يورجن كلوب بتدريب ناديين في ألمانيا، بوروسيا دورتموند و- هل يمكنك تسمية الآخر؟", 
        answer: "ماينز",
        answered: false 
      },
      { 
        value: 300, 
        question: "كم عدد الأندية التي شاركت في الموسم الافتتاحي للدوري الممتاز؟", 
        answer: "٢٢",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هم اللاعبين الثلاثة الذين تشاركوا في الحذاء الذهبي في الدوري الإنجليزي الممتاز في ٢٠١٨-٢٠١٩؟", 
        answer: "بيير إميريك أوباميانج، محمد صلاح، وساديو ماني",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بلد شارك في ثلاث نهائيات لكأس العالم، لكنه لم يفز أبداً بالمنافسة؟", 
        answer: "هولندا",
        answered: false 
      },
      { 
        value: 300, 
        question: "سيتم استضافة كأس العالم ٢٠٢٦ في ثلاث دول مختلفة. يمكنك تسميتهم؟", 
        answer: "الولايات المتحدة وكندا والمكسيك",
        answered: false 
      },
      { 
        value: 300, 
        question: "فاز ثلاثة أشخاص بكأس العالم كلاعب ومدرب. ماريو زاجالو وديدييه ديشامب ... هل يمكنك تسمية الثالث؟", 
        answer: "فرانز بيكنباور",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو مدرب توتنهام السابق الذي تنافس في رالي داكار؟", 
        answer: "أندريه فيلاز-بواس",
        answered: false 
      },
      { 
        value: 300, 
        question: "حاول رينجرز التوقيع مع أي نجم بعد أن تم تنبيه أليكس ماكليش إلى قدرته من خلال لعبة الفيديو الشهيرة Football Manager؟", 
        answer: "ليونيل ميسي",
        answered: false 
      },
      { 
        value: 300, 
        question: "فاز فريق من رومانيا بدوري أبطال أوروبا مرة واحدة فقط. يمكنك تسميته؟", 
        answer: "ستيوا بوخارست (الآن FCSB)",
        answered: false 
      },
      { 
        value: 300, 
        question: "من اللاعب الذي يحمل الرقم القياسي لعدد مرات المشاركة في دوري أبطال أوروبا؟", 
        answer: "ايكر كاسياس (177)",
        answered: false 
      },
      { 
        value: 300, 
        question: "من سجل الهدف الذهبي لفرنسا في إيطاليا في يورو 2000؟", 
        answer: "دافيد تريزيجيه",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو هداف إنجلترا في كأس أمم أوروبا؟", 
        answer: "ألان شيرار",
        answered: false 
      },
      { 
        value: 300, 
        question: "فاز منتخب الدنمارك بيورو 92 رغم فشله في الوصول من التصفيات، فمن المنتخب الذي شارك بدلاً منه؟", 
        answer: "يوغوسلافيا",
        answered: false 
      },
      { 
        value: 300, 
        question: "هل يمكنك تسمية أكثر لاعب شارك مع منتخب ألمانيا عبر التاريخ؟", 
        answer: "لوثار ماتيوس",
        answered: false 
      },
      { 
        value: 300, 
        question: "العمر القياسي لأصغر مدرب في الدوري الألماني هو 28 عامًا و 205 يومًا. من كان؟", 
        answer: "يوليان ناجيلسمان",
        answered: false 
      },
      { 
        value: 300, 
        question: "فازت ألمانيا بكأس العالم أربع مرات، ولكن كم مرة فعلت ذلك كدولة موحدة؟", 
        answer: "مرة واحدة (2014)",
        answered: false 
      },
      { 
        value: 300, 
        question: "فقط ثلاثة أندية ألمانية فازت بكأس أوروبا / دوري أبطال أوروبا. من هم؟", 
        answer: "بايرن ميونخ، بوروسيا دورتموند، وهامبورج",
        answered: false 
      },
      { 
        value: 400, 
        question: "أسرع هدف سجل في تاريخ الدوري الإنجليزي جاء في ٧.٦٩ ثانية. من سجلها؟", 
        answer: "شين لونج (لـ ساوثامبتون ضد واتفورد في ٢٠١٨-٢٠١٩)",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو اللاعب الوحيد الذي فاز بدوري أبطال أوروبا مع ثلاثة أندية مختلفة؟", 
        answer: "كلارنس سيدورف (أياكس، ريال مدريد، ميلان)",
        answered: false 
      },
      { 
        value: 400, 
        question: "ثلاثة اشخاص فازوا بدوري ابطال اوروبا رقما قياسيا ثلاث مرات كمدير فني. من هم؟", 
        answer: "بوب بيزلي وكارلو انشيلوتي وزين الدين زيدان",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي لاعب يحمل الرقم القياسي لمعظم ميداليات الفائزين بدوري أبطال أوروبا؟", 
        answer: "فرانسيسكو خينتو (ستة ألقاب مع ريال مدريد)",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو الوحيد الذي فاز بكأس أمم أوروبا كلاعب ومدرب؟", 
        answer: "بيرتي فوجتس (ألمانيا الغربية 1972، ألمانيا 1996)",
        answered: false 
      },
      { 
        value: 400, 
        question: "حقق بايرن ميونخ الرقم القياسي في عدد ألقاب الدوري الألماني، لكن هناك ناديان خلفه في الترتيب بخمسة ألقابٍ لكلٍ منهما، من هما؟", 
        answer: "بوروسيا مونشنجلادباخ وبوروسيا دورتموند",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي ناد فاز بأكبر عدد من ألقاب دوري أبطال أوروبا؟", 
        answer: "ريال مدريد (١٣)",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو هداف دوري أبطال أوروبا في كل العصور؟", 
        answer: "كريستيانو رونالدو",
        answered: false 
      },
      { 
        value: 500, 
        question: "من يحمل الرقم القياسي لأفضل هداف في تاريخ الدوري الألماني؟", 
        answer: "جيرد مولر",
        answered: false 
      }
    ]
  },
  {
    id: 'lol',
    name: 'ليج أوف ليجندز',
    icon: '🎮',
    questions: [
      { 
        value: 100, 
        question: "كم عدد الأبطال الذين كانوا متاحين عند إطلاق لعبة ليغ أوف ليجيندز؟", 
        answer: "40",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي بطل  يمكنه أسر الأرواح؟", 
        answer: "ثريش",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي سنة تم إصدار ليغ أوف ليجيندز رسميًا؟", 
        answer: "2009",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي سنة تم إقامة أول بطولة عالمية؟", 
        answer: "2011",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي شركة تشرف على إطلاق ليغ أوف ليجيندز في الصين؟", 
        answer: "تينسنت",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الحدث السنوي لبطولة ليغ أوف ليجيندز؟", 
        answer: "بطولة ليغ أوف ليجيندز العالمية (العالم)",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما كان الاسم الأصلي للعبة ليج أوف ليجندز خلال مراحل التطوير المبكرة؟", 
        answer: "League of Legends: Clash of Fates",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي بطل كان الأول الذي تم إطلاقه بعد الإطلاق الرسمي للعبة؟", 
        answer: "Udyr",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي سنة تم إصدار لعبة ليج أوف ليجندز رسمياً؟", 
        answer: "2009",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي بطل لديه أطول مدى لهجومه العادي عند المستوى 1؟", 
        answer: "Caitlyn (650 وحدة)",
        answered: false 
      },
      { 
        value: 100, 
        question: "من كان أول بطل يحصل على تحديث بصري كامل وتحديث في طريقة اللعب؟", 
        answer: "Sivir (تحديث بسيط في 2011)؛ لكن التحديث الكامل كان لإيفلين في 2017",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو أقصى تخفيض محتمل لوقت الانتعاش (CDR) في اللعبة قبل استبداله بقدرة Ability Haste؟", 
        answer: "40%",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي بطل لديه أسرع حركة لهجومه الأساسي؟", 
        answer: "Jhin (الضربة الرابعة تكاد تكون فورية)",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي بطل يمتلك أعلى سرعة حركة أساسية في اللعبة (دون أحذية)؟", 
        answer: "Cassiopeia (بفضل سلبية خاصتها)",
        answered: false 
      },
      { 
        value: 100, 
        question: "ماذا تفعل القدرة السلبية لأورليان سول؟", 
        answer: "النجوم تدور حوله وتسبب ضرراً للأعداء عند اصطدامها بهم",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي بطل لديه أقل نقاط صحة أساسية قبل تحوله إلى بيضة؟", 
        answer: "Anivia",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي فريق فاز بأول بطولة عالمية للعبة ليج أوف ليجندز؟", 
        answer: "Fnatic (2011)",
        answered: false 
      },
      { 
        value: 100, 
        question: "من كان أول لاعب يحقق 1000 قتل في المباريات الاحترافية؟", 
        answer: "Faker",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي بطل كان الأكثر منعاً في بطولة العالم لموسم 3؟", 
        answer: "Aatrox",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما كان أول بطل يتم اختياره في مباراة احترافية للعبة؟", 
        answer: "Annie",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي بطل حقق أعلى معدل فوز في بطولة العالم لعام 2023؟", 
        answer: "Azir",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي أطول مباراة احترافية في تاريخ اللعبة؟", 
        answer: "Jin Air Green Wings مقابل SKT T1 (94 دقيقة، LCK 2018)",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو اللاعب الوحيد الذي فاز ببطولة العالم مع فريقين مختلفين؟", 
        answer: "Duke (SKT T1 وInvictus Gaming)",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي لاعب في مركز ADC كان معروفاً بترويج شخصية Vayne في المنافسات؟", 
        answer: "Uzi",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي بطل دعم تم لعبه بواسطة MadLife مما ألهم مصطلح \"MadLife hooks\"؟", 
        answer: "Thresh",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي فريق كان أول فريق غير كوري يفوز ببطولة العالم بعد سيطرة كوريا من 2013 إلى 2017؟", 
        answer: "Invictus Gaming (2018)",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو اسم سلاح لوكسيان؟", 
        answer: "السعي المستمر - The Relentless Pursuit",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي تعديل لعبة ألهم إنشاء ليغ أوف ليجيندز؟", 
        answer: "دفاع القدماء (دوتا)",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما كانت قيمة الجائزة في أول بطولة عالمية؟", 
        answer: "100,000 دولار",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما كان العدد الأقصى للاعبين المتزامنين في ليغ أوف ليجيندز في عام 2019؟", 
        answer: "8 مليون",
        answered: false 
      },
      { 
        value: 200, 
        question: "كم عدد الدوريات الإقليمية التي تديرها ريّوت للألعاب لرياضات ليغ أوف ليجيندز (اعتبارًا من أبريل 2021)؟", 
        answer: "12",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم القدرة السلبية لجين؟", 
        answer: "Whisper",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي بطل يمتلك القدرة الوحيدة التي تمكنه من استخدام قدراته لبضع ثوانٍ بعد الموت؟", 
        answer: "Karthus",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هي أسماء ألوان بطاقات Twisted Fate الثلاث؟", 
        answer: "أزرق، أحمر، وذهبي",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي بطل لديه أقصر مدة انتظار لقدرته عند استخدام Twin Fang على هدف مسموم؟", 
        answer: "Cassiopeia",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هي الزوجة المتوفاة لفيديو؟", 
        answer: "Isolde",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي بطل كان الأول الذي يمتلك قدرة “التطهير” من تأثيرات السيطرة قبل ظهور QSS؟", 
        answer: "Gangplank (قدرة Remove Scurvy)",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي بطل يمتلك سلبية تمنحه ذهباً عند الهجوم العادي؟", 
        answer: "Gangplank (Parrrley يعطي ذهباً عند القتل)",
        answered: false 
      },
      { 
        value: 200, 
        question: "من قتل Gangplank في القصة مما أدى إلى إزالته مؤقتاً من اللعبة؟", 
        answer: "Miss Fortune",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي بطل يعرف باسم \"عملاق الأعماق\"؟", 
        answer: "Nautilus",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي بطل لديه قدرة نهائية تستدعي سمكة قرش طائرة عملاقة؟", 
        answer: "Fizz",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي عنصر كان يمنح “شفاء السحر” قبل أن يتم إزالته؟", 
        answer: "Will of the Ancients",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما كان اسم العنصر الحصري لخرائط Twisted Treeline والذي كان يمنح رؤية مثل الوارد؟", 
        answer: "Grevious Wounds Totem",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي عنصر أسطوري يُستخدم عادةً من قبل القتلة لتحقيق lethality؟", 
        answer: "Duskblade of Draktharr",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما كان اسم عنصر الغابة الذي كان يسمح للبطل بضرب الأعداء بضربة قاتلة؟", 
        answer: "Skirmisher’s Sabre",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي عنصر كان يمنح ضرر حقيقي عند الضربة قبل إزالته من اللعبة؟", 
        answer: "Sword of the Divine",
        answered: false 
      },
      { 
        value: 200, 
        question: "ماذا يحصل رينغار إذا قتل Kha’Zix في حدث “The Hunt is On”؟", 
        answer: "يحصل على عقد أسنان مكتمل (Bonetooth Necklace)",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي بطل كان يحصل على قدرات إضافية عند مواجهته لبطل معين؟", 
        answer: "Kha’Zix (يتطور ضد رينغار في حدث The Hunt is On)",
        answered: false 
      },
      { 
        value: 200, 
        question: "لمن لدى تي مو تحديات مخفية خاصة؟", 
        answer: "Singed (بسبب الخصومة في القصة)",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي بطل يُبرمج ليقول \"أنت تنتمي إلى متحف\" عند التفاعل مع Ezreal؟", 
        answer: "Nasus",
        answered: false 
      },
      { 
        value: 200, 
        question: "من الذي يمتلك أعلى معدل اختيار في وضع ARAM تاريخياً؟", 
        answer: "Lux",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم عالم الموتى الذي تنشأ منه ماوكاي؟", 
        answer: "The Shadow Isles",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هم أصدقاء جاكس في الذهاب الى الحانة والشرب والسكر (لا سامحهم الله)؟", 
        answer: "لي سين وريفيين",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بطل عذبه سينجد وغير بطريقة غير مقصودة إلى مخلوق ؟", 
        answer: "وارويك",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو الاتصال بين لوكسي وسايلس في القصة؟", 
        answer: "سايلس هو أسير لوكس ويأخذ قوتها",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم المجموعة التي ينتمي إليها سينا ولوكسيان؟", 
        answer: "حراس النور",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما كان اسم مالزاهار أثناء تطويره قبل تغييره؟", 
        answer: "The Prophet of the Void",
        answered: false 
      },
      { 
        value: 300, 
        question: "رقص أي بطل كان مستوحى من شخص حقيقي تحدى كابس في تحدي رقص؟", 
        answer: "K/DA أهري",
        answered: false 
      },
      { 
        value: 300, 
        question: "كائن ليس جماد ولا انسان ولكنه واعي ما اسم الشخصية؟", 
        answer: "ماوكاي",
        answered: false 
      },
      { 
        value: 300, 
        question: "كم عدد الأبطال الذين كانت ريّوت تهدف لشحن اللعبة بهم في البداية؟", 
        answer: "20",
        answered: false 
      },
      { 
        value: 300, 
        question: "كم عدد الأبطال الذين كانوا متاحين خلال اختبار النسخة المغلقة في أبريل 2009؟", 
        answer: "17",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي أربع دوريات إقليمية لديها أنظمة فرانشايز في رياضات ليغ أوف ليجيندز؟", 
        answer: "LCS، LEC، LCK، LPL",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بطل يستطيع القضاء على باريش ناشور بأسرع وقت دون أي عناصر؟", 
        answer: "Master Yi (بفضل سرعته الهجومية والضرر الحقيقي من قدرته E)",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بطل لديه قدرة سلبية تقلل من درع العدو عند ضربه؟", 
        answer: "Black Cleaver (عنصر) / Wukong (قدرة Q تقلل الدرع مؤقتاً)",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو أقصى مقدار للضرر الهجومي (AD) الذي يمكن أن يحصل عليه Nasus نظرياً من قدرته Q؟", 
        answer: "لا نهائي (يمكن تكديسه إلى ما لا نهاية)",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هي القدرة الوحيدة في اللعبة التي كانت تسمح للبطل بشراء عناصر خارج المتجر؟", 
        answer: "قدرة Twisted Fate القديمة (أزيلت)؛ وفي النسخة الحالية: لا شيء",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بطل لديه قدرة تنفيذ للأعداء الصغيرة (minions) بصحتهم الكاملة؟", 
        answer: "Cho’Gath (Feast)",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو التأثير الوحيد للسيطرة على الجمهور الذي يمكنه مقاطعة القدرة النهائية لمالزهاهر أثناء تفعيل درعه السلبي؟", 
        answer: "القمع (مثل قدرة سكاينر أو أرغوت أو وورويك النهائية)",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بطل لديه القدرة التي تسبب أعلى ضرر انفجاري في دفعة واحدة على هدف منخفض الصحة؟", 
        answer: "Veigar (قدرة R – Primordial Burst)",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي قدرة لديها أطول مدة انتظار عند أقصى رتبة دون تخفيض مدة الانتعاش؟", 
        answer: "قدرة كلد النهائية (Chaaaaaaaarge!!!) – 160 ثانية عند الرتبة 3",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بطل يمتلك قدرة تتيح له تنفيذ نفسه عند الطلب؟", 
        answer: "Zilean (قدرة Rewind القديمة عند رفع المستوى تؤدي إلى الوفاة فوراً بدون فقدان الخبرة)",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بطل يمتلك أعلى ضرر هجوم أساسي عند المستوى 1؟", 
        answer: "Cho’Gath (69 ضرر أساسي)",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بطل لديه القدرة الوحيدة التي تسمح له برؤية داخل منطقة باريش دون الحاجة لوضع ورد؟", 
        answer: "Kalista (قدرة Sentinel W التي ترسل روحاً)",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هي القدرة الوحيدة التي تسمح للبطل بتغيير تعاويذ المستدعي خلال المباراة؟", 
        answer: "قدرة W لزوي (Spell Thief)",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي تعويذة مستدعي تمت إزالتها من اللعبة والتي كانت تسمح بتبديل الأماكن مع حليف؟", 
        answer: "Recall (لاحقاً تحولت إلى Teleport في المواسم الأولى)",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بطل تم تصميمه في البداية كمزحة ولكنه تحول لاحقاً إلى بطل حقيقي؟", 
        answer: "Urgot (كان في الأصل هجوماً ساخرًا على مخلوقات فرانكشتاين)",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو أول بطل يحصل على إعادة تصميم كاملة في تاريخ اللعبة؟", 
        answer: "Twisted Fate (تم تعديل مظهره وقدراته في النسخة التجريبية)",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بطل يُعرف باسم \"نهاية العالم بمفرده\"؟", 
        answer: "Rumble",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بطل لديه سلبية مخفية تجعله يتلقى ضرراً أكبر من قدرات ليونا؟", 
        answer: "Zed (إشارة إلى تأثير الضوء مقابل الظل)",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بطل يحمل اسماً يشكل حروفه تشكيلة من \"Aatrox\"؟", 
        answer: "لا يوجد تشكيل أحرف مؤكد لـ\"Aatrox",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو عدو سينا؟", 
        answer: "ثريش",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي بطل تعهد بحماية ليليا من نوكتورن وفقًا لخطوط الصوت الخاصة بهم؟", 
        answer: "سيت",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي بطل لديه أدنى نسبة من اللاعبين الذين يستخدمونه (اعتبارًا من 2022)؟", 
        answer: "إيفيرن",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هي القدرة الفريدة التي تمتلكها سينا والمتعلقة بـ \"بلاكميست\"؟", 
        answer: "يمكنها جمع الأرواح وتحويلها إلى قوة",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هما مؤسسا شركة ريّوت للألعاب؟", 
        answer: "براندون بيك ومارك ميريل",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما كان الاسم الكامل الأصلي للعبة ليغ أوف ليجيندز قبل حذف العنوان الفرعي؟", 
        answer: "ليغ أوف ليجيندز: صراع القدر",
        answered: false 
      },
      { 
        value: 400, 
        question: "كم عدد المشاهدين الفريدين الذين سجلتهم بطولة ليغ أوف ليجيندز العالمية 2019؟", 
        answer: "100 مليون",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي بطل في القصة يُذكر أنه كان خبازاً في السابق؟", 
        answer: "Pantheon (كان يُعرف باسم Atreus قبل اختياره من قبل جانب الحرب)",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هو اسم الشخصية المقنعة الغامضة في قصة جين؟", 
        answer: "Zindelo",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي بطل بدأ كجلد نهائي لسيفير لكنه تحول إلى شخصية مستقلة؟", 
        answer: "Samira",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي بطل يُعرف باسم \"المبارز الكبير\"؟", 
        answer: "Fiora",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو الكيان الشيطاني الذي يُعتبر معبود سوين؟", 
        answer: "Raum",
        answered: false 
      },
      { 
        value: 400, 
        question: "من يحمل الرقم القياسي لأكبر عدد من القتلات في مباراة واحدة في بطولة Worlds؟", 
        answer: "Uzi (22 قتل في مباراة واحدة في Worlds 2017)",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي فريق حقق أطول سلسلة انتصارات غير مهزومة في تاريخ اللعبة الاحترافية؟", 
        answer: "SK Telecom T1 (2015، سلسلة 14-0 في Worlds)",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي بطل كان أول من تم منعه في تاريخ المباريات الاحترافية؟", 
        answer: "Shen",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي بطل بدأ يُلعب في الغابة في مباراة احترافية رغم أنه كان يُصنف كلانياً؟", 
        answer: "Morgana (استخدمها Clid في LCK 2021 كلعب في الغابة)",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو اللاعب الذي فاز بأكبر عدد من ألقاب Worlds؟", 
        answer: "Faker (4 ألقاب: 2013، 2015، 2016، 2023)",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هو أكبر عجز ذهبي تم التغلب عليه في مباراة في LCS؟", 
        answer: "أكثر من 10,000 ذهب (مثال: CLG مقابل Dignitas في ربيع 2014)",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي بطل تم لعبه في كل دور احترافي على الإطلاق؟", 
        answer: "Gragas",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي فريقان تنافسا في أطول مباراة احترافية في تاريخ اللعبة؟", 
        answer: "Jin Air Green Wings مقابل SKT T1 (94 دقيقة، LCK 2018)",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو اللاعب الوحيد من خارج كوريا الذي فاز ببطولة العالم في مركز الوسط؟", 
        answer: "Doinb (FunPlus Phoenix، 2019)",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هي أسرع مباراة احترافية تم تسجيلها في Worlds؟", 
        answer: "Samsung Galaxy مقابل Origen (2015) – 16 دقيقة و51 ثانية",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما كان اسم معسكر الغابة الذي تمت إزالته والذي كان يمنح زيادة في السرعة؟", 
        answer: "Razorbeaks (استُبدل بـ Raptors في إعادة تصميم الغابة)",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي عنصر كان يمنح درعاً بعد تلقي الضرر وتم تعديله لاحقاً؟", 
        answer: "Sterak’s Gage (القدرة القديمة \"Lifeline\" تغيرت مع الوقت)",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما كان اسم العنصر الذي كان يسمح بإحياء اللاعب بعد الموت؟", 
        answer: "Guardian Angel (ما زال موجوداً) / القدرة القديمة لزيلان (أزيلت)",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما كان اسم العنصر الذي تمت إزالته والذي كان يمنح صحة إضافية بناءً على قتل الأعداء؟", 
        answer: "Leviathan",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي عنصر تمت إزالته وكان يمنح أعلى معدل للامتصاص الحيوي؟", 
        answer: "Sanguine Blade",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي بطلتين هما شقيقتان، إحداهما بشرية والأخرى تحولت إلى مخلوق؟", 
        answer: "كاترينا وكاسيوبيا",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي بطل لُعن ليموت على يد \"بلاكميست\" لكنه انتهى بالتحكم فيه؟", 
        answer: "سينا",
        answered: false 
      },
      { 
        value: 500, 
        question: "ماذا يعني اسم مورديكايسر عندما يُفصل إلى كلمات ألمانية؟", 
        answer: "مطرقة الموت",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي بطل لديه حركة رقص خاصة عند وجود بطل آخر بجانبه بجلد معين؟", 
        answer: "Lucian وSenna (مع تفاعلات خاصة في أزياء PROJECT)",
        answered: false 
      },
      { 
        value: 500, 
        question: "من لديه تحدٍ مخفي ضد كلد؟", 
        answer: "Graves (يرتبط بقصته مع نوكس واستقلال كلد)",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي بطل لديه عبارة صوتية تشير إلى لعبة \"DOOM\"؟", 
        answer: "Jhin (إشارة \"Rip and Tear\")",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي بطل كان لديه تفاعل مخفي يشغل موسيقى عند تفعيل قدرته النهائية؟", 
        answer: "Sona",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي بطل لديه تحدٍ مخفي ضد كايتلين؟", 
        answer: "Vi (\"اضرب أولاً واسأل بعدين\")",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي بطل يمتلك أكبر عدد من القدرات التي تطبق تأثير الجروح العميقة (Grievous Wounds)؟", 
        answer: "Katarina (بفضل قدراتها وسلبياتها وعناصرها)",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما كان أول بطل يحصل على جلد بريستيج؟", 
        answer: "Kai’Sa (إصدار K/DA Prestige)",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي بطل لديه قدرة تقلل من صحته بشكل دائم؟", 
        answer: "Mordekaiser (القدرة السلبية القديمة التي كانت تحرق الصحة مع مرور الوقت)",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو أعلى ضرر هجومي (AD) حققه بطل في مباراة عادية؟", 
        answer: "أكثر من 5000 AD (مثل Sion مع تكديس كامل على قدرته W وبعض التركيبات)",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي بطل هو الوحيد الذي يمكنه زيادة الحد الأقصى لنقاط صحة الحلفاء؟", 
        answer: "Tahm Kench (قدرة Devour القديمة)",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي قدرة تتيح لك المرور عبر الجدران؟", 
        answer: "Kayn (قدرة E – Shadow Step)",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي بطل لديه سلبية تمنحه 1% شفاء إضافي مقابل كل 2% نقص في الصحة؟", 
        answer: "Aatrox",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي بطل تم إطلاقه بمعدل فوز عالي عند الإطلاق؟", 
        answer: "Aphelios (أكثر من 70%)",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو أقدم بطل من حيث القصة داخل اللعبة؟", 
        answer: "Ornn",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما كان أول نمط لعبة بديل يُضاف إلى ليج أوف ليجندز؟", 
        answer: "Dominion",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي بطل هو الوحيد الذي يمتلك قدرة بلا تكلفة مانا تُعيد له الصحة؟", 
        answer: "Dr. Mundo (القدرة القديمة قبل إعادة التصميم)",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما كان أول عنصر أسطوري (Mythic) يُقدم في اللعبة؟", 
        answer: "Duskblade of Draktharr",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الزعيم النهائي في قصة ليج أوف ليجندز؟", 
        answer: "Aurelion Sol أو Viego (حسب السرد)",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي بطل يمتلك أكبر عدد من الأزياء؟", 
        answer: "Ezreal",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي بطل لديه أكبر عدد من قدرات التنقل؟", 
        answer: "Akali",
        answered: false 
      }
    ]
  },
  {
    id: 'qatar',
    name: 'قطر',
    icon: '🇶🇦',
    questions: [
      { 
        value: 100, 
        question: "ما اسم العملة الذهبية التي سُكت في عهد الشيخ جاسم بن محمد آل ثاني؟", 
        answer: "المحبوب الذهبي",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي عام تم اكتشاف حقل الشمال للغاز الطبيعي؟", 
        answer: "1971",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم القارب التقليدي المستخدم في الغوص على اللؤلؤ في قطر؟", 
        answer: "البتيل",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم السوق التقليدي في الدوحة الذي أعيد بناؤه ليحاكي الأسواق القديمة؟", 
        answer: "سوق واقف",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الحيوان الوطني لدولة قطر؟", 
        answer: "المها العربي",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم المهرجان السنوي الذي يقام في كتارا ويحتفي بالتراث البحري؟", 
        answer: "مهرجان المحامل التقليدية",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الرقصة الشعبية القطرية التي تؤدى بالسيوف؟", 
        answer: "العرضة",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الطبق القطري التقليدي المكون من الأرز واللحم أو الدجاج؟", 
        answer: "المجبوس",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم القلعة التاريخية التي تقع في منطقة الزبارة؟", 
        answer: "قلعة الزبارة",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الجزيرة الاصطناعية في الدوحة التي تشبه اللؤلؤة؟", 
        answer: "اللؤلؤة-قطر",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو المهندس المعماري الذي صمم متحف الفن الإسلامي في الدوحة؟", 
        answer: "آي.إم. باي",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم المعاهدة التي أنهت النزاع الحدودي مع البحرين عام 2001؟", 
        answer: "اتفاقية لاهاي",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم الشاعر القطري الذي يُلقب بـ 'شاعر الوطن'؟", 
        answer: "مبارك بن سيف آل ثاني",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم الفيلم القطري الذي رُشح لجائزة الأوسكار عام 2021؟", 
        answer: "الرجل الذي باع ظهره",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم المؤسسة الإعلامية القطرية التي تبث عالميًا؟", 
        answer: "شبكة الجزيرة الإعلامية",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم المتحف الذي يقع في مبنى مطار الدوحة القديم؟", 
        answer: "متحف قطر الوطني",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم السباق التقليدي الذي يقام في قطر باستخدام الإبل؟", 
        answer: "سباق الهجن",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم المنطقة التي تشتهر بوجود التكوينات الصخرية الفريدة في قطر؟", 
        answer: "زكريت",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم القناة المائية التي تفصل بين قطر والسعودية؟", 
        answer: "خور العديد",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم المنطقة التي كانت مركزًا لصيد اللؤلؤ في قطر قديمًا؟", 
        answer: "الخور",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم النظام التقليدي لإدارة المياه في واحة الشيحانية؟", 
        answer: "نظام الأحواض المائية",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هي أول قاضية قطريه في المحكمة العليا؟", 
        answer: "الشيخة المحفوظة بنت عبد العزيز آل ثاني",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الفنان التشكيلي القطري الذي يُعرف بأعماله المستوحاة من الخط العربي؟", 
        answer: "يوسف أحمد",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم المسلسل القطري الذي حقق نجاحًا كبيرًا في التسعينيات؟", 
        answer: "حكم البشر",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الجائزة التي تمنحها قطر للإنجازات في مجال الثقافة والفنون؟", 
        answer: "جائزة كتارا للرواية العربية",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم المهرجان السينمائي الذي يقام في الدوحة سنويًا؟", 
        answer: "مهرجان أجيال السينمائي",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الفرقة الموسيقية القطرية التي تمزج بين الموسيقى التقليدية والمعاصرة؟", 
        answer: "فرقة قطر للموسيقى",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم المنطقة التي تشتهر بوجود أشجار القرم (المانغروف) في قطر؟", 
        answer: "الذخيرة",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم أعلى قمة في قطر؟", 
        answer: "قرين أبو البول",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم المنطقة التي توجد بها نقوش صخرية قديمة في قطر؟", 
        answer: "الجساسية",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المخطوطة القطرية من القرن 18 المحفوظة في برلين حول تاريخ الخليج؟", 
        answer: "مخطوطة ابن غنام",
        answered: false 
      },
      { 
        value: 400, 
        question: "في أي عام أصدرت قطر أول عملة ورقية مستقلة؟", 
        answer: "1973",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم الشاعرة القطرية التي تُعرف بـ 'شاعرة الخليج'؟", 
        answer: "خلود المعلا",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم الفيلم الوثائقي القطري الذي يتناول تاريخ الغوص على اللؤلؤ؟", 
        answer: "بنات النوخذة",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المؤسسة التي تُعنى بتطوير التعليم في قطر؟", 
        answer: "مؤسسة قطر للتربية والعلوم وتنمية المجتمع",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المتحف الذي يضم مجموعة كبيرة من السيارات الكلاسيكية في قطر؟", 
        answer: "متحف الشيخ فيصل بن قاسم آل ثاني",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم السباق التقليدي الذي يقام في قطر باستخدام الخيول العربية الأصيلة؟", 
        answer: "سباق سيف سمو الأمير",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المنطقة التي تشتهر بوجود الكثبان الرملية العالية في قطر؟", 
        answer: "سيلين",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المحمية الطبيعية التي تقع في شمال غرب قطر؟", 
        answer: "محمية الريم",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المنطقة التي توجد بها آثار لمستوطنة قديمة في قطر؟", 
        answer: "مروب",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم الرمز السري الذي استخدمه تجار اللؤلؤ القطريون للتواصل؟", 
        answer: "الرمزة",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو المؤرخ القطري الذي كتب 'تحفة النظار في غرائب الأمصار'؟", 
        answer: "أحمد بن ماجد",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم الديوان الشعري الذي جمع قصائد الشيخ جاسم بن محمد آل ثاني؟", 
        answer: "ديوان المؤسس",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم الفنان القطري الذي صمم شعار 'رؤية قطر الوطنية 2030'؟", 
        answer: "سلمان المالك",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم المعركة التاريخية التي وقعت بين قطر والبحرين عام 1867؟", 
        answer: "معركة الزبارة",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم أول صحيفة صدرت في قطر؟", 
        answer: "جريدة العهد",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم أول بنك تأسس في قطر؟", 
        answer: "البنك البريطاني للشرق الأوسط",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم أول مدرسة نظامية افتتحت في قطر؟", 
        answer: "المدرسة الأثرية",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم أول مستشفى تم بناؤه في قطر؟", 
        answer: "مستشفى الرميلة",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم أول شركة طيران وطنية في قطر؟", 
        answer: "طيران الخليج (كانت مشتركة)",
        answered: false 
      }
    ]
  },
  {
    id: 'arts',
    name: 'الفنون والأدب',
    icon: '🎭',
    questions: [
      { 
        value: 100, 
        question: "من هو الرسام الذي رسم لوحة 'الموناليزا'؟", 
        answer: "ليوناردو دا فينشي",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو الكاتب الذي كتب مسرحية 'هاملت'؟", 
        answer: "ويليام شكسبير",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو اسم التمثال الشهير الذي يجسد امرأة بدون ذراعين؟", 
        answer: "فينوس دي ميلو",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو المؤلف الذي كتب رواية 'دون كيشوت'؟", 
        answer: "ميغيل دي ثيربانتس",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو اسم القصيدة الملحمية التي كتبها هوميروس عن حرب طروادة؟", 
        answer: "الإلياذة",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو النحات الذي نحت تمثال 'المفكر'؟", 
        answer: "أوغست رودان",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو المؤلف الذي كتب رواية '1984'؟", 
        answer: "جورج أورويل",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو اسم اللوحة الشهيرة التي تصور ليلة مرصعة بالنجوم؟", 
        answer: "ليلة النجوم (The Starry Night)",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو المؤلف الذي كتب رواية 'كبرياء وتحامل'؟", 
        answer: "جين أوستن",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو اسم المسرحية الشهيرة التي كتبها سوفوكليس عن ملك أوديب؟", 
        answer: "أوديب ملكًا",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الرسام الذي رسم لوحة 'إصرار الذاكرة' (الساعات الذائبة)؟", 
        answer: "سلفادور دالي",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الكاتب الذي كتب مسرحية 'روميو وجولييت'؟", 
        answer: "ويليام شكسبير",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو اسم التمثال الشهير الذي يجسد رجلاً عاريًا يفكر؟", 
        answer: "المفكر (The Thinker)",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو المؤلف الذي كتب رواية 'مئة عام من العزلة'؟", 
        answer: "غابرييل غارثيا ماركيث",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو اسم القصيدة الملحمية التي كتبها هوميروس عن رحلة عودة أوديسيوس؟", 
        answer: "الأوديسة",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو النحات الذي نحت تمثال 'داوود'؟", 
        answer: "مايكل أنجلو",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو المؤلف الذي كتب رواية 'الأخوة كارامازوف'؟", 
        answer: "فيودور دوستويفسكي",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو اسم اللوحة الشهيرة التي تصور مشهدًا من الثورة الفرنسية؟", 
        answer: "الحرية تقود الشعب (Liberty Leading the People)",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو المؤلف الذي كتب رواية 'الحرب والسلم'؟", 
        answer: "ليو تولستوي",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو اسم المسرحية الشهيرة التي كتبها آرثر ميلر عن محاكمات السحر؟", 
        answer: "البوتقة (The Crucible)",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الرسام الذي رسم لوحة 'غيرنيكا'؟", 
        answer: "بابلو بيكاسو",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو الكاتب الذي كتب مسرحية 'ماكبث'؟", 
        answer: "ويليام شكسبير",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم التمثال الشهير الذي يجسد إلهة الحب والجمال؟", 
        answer: "أفروديت (فينوس)",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو المؤلف الذي كتب رواية 'البؤساء'؟", 
        answer: "فيكتور هوغو",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم الملحمة الشعرية التي كتبها دانتي أليغييري؟", 
        answer: "الكوميديا الإلهية",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو النحات الذي نحت تمثال 'القبلة'؟", 
        answer: "أوغست رودان",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو المؤلف الذي كتب رواية 'الجريمة والعقاب'؟", 
        answer: "فيودور دوستويفسكي",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم اللوحة الشهيرة التي تصور حقل قمح وغربان؟", 
        answer: "حقل قمح مع غربان (Wheatfield with Crows)",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو المؤلف الذي كتب رواية 'غاتسبي العظيم'؟", 
        answer: "فرانسيس سكوت فيتزجيرالد",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم المسرحية الشهيرة التي كتبها تينيسي وليامز عن عائلة جنوبية؟", 
        answer: "عربة اسمها الرغبة (A Streetcar Named Desire)",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو الرسام الذي رسم لوحة 'الفتاة ذات القرط اللؤلؤي'؟", 
        answer: "يوهانس فيرمير",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو الكاتب الذي كتب مسرحية 'عطيل'؟", 
        answer: "ويليام شكسبير",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هو اسم التمثال الشهير الذي يجسد إله البحر؟", 
        answer: "بوسيدون (نبتون)",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو المؤلف الذي كتب رواية 'الأمير الصغير'؟", 
        answer: "أنطوان دو سانت إكزوبيري",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هو اسم الملحمة الشعرية التي كتبها جون ميلتون عن سقوط الإنسان؟", 
        answer: "الفردوس المفقود (Paradise Lost)",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو النحات الذي نحت تمثال 'موسى'؟", 
        answer: "مايكل أنجلو",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو المؤلف الذي كتب رواية 'مدام بوفاري'؟", 
        answer: "غوستاف فلوبير",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هو اسم اللوحة الشهيرة التي تصور عشاء المسيح الأخير؟", 
        answer: "العشاء الأخير (The Last Supper)",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هو المؤلف الذي كتب رواية 'الصخب والعنف'؟", 
        answer: "ويليام فوكنر",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هو اسم المسرحية الشهيرة التي كتبها صمويل بيكيت عن شخصين ينتظران؟", 
        answer: "في انتظار غودو (Waiting for Godot)",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الرسام الذي رسم لوحة 'الصرخة'؟", 
        answer: "إدفارد مونك",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو الكاتب الذي كتب مسرحية 'الملك لير'؟", 
        answer: "ويليام شكسبير",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم التمثال الشهير الذي يجسد إله الشمس؟", 
        answer: "أبولو",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو المؤلف الذي كتب رواية 'يوليسيس'؟", 
        answer: "جيمس جويس",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم الملحمة الشعرية التي كتبها فرجيل عن تأسيس روما؟", 
        answer: "الإنياذة (The Aeneid)",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو النحات الذي نحت تمثال 'لاوكون وأبناؤه'؟", 
        answer: "أجيساندروس وأثينودوروس وبوليدوروس (نحاتون من رودس)",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو المؤلف الذي كتب رواية 'البحث عن الزمن المفقود'؟", 
        answer: "مارسيل بروست",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم اللوحة الشهيرة التي تصور حديقة زنابق الماء؟", 
        answer: "زنابق الماء (Water Lilies) (سلسلة لوحات لكلود مونيه)",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو المؤلف الذي كتب رواية 'الأرض اليباب'؟", 
        answer: "ت. س. إليوت",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم المسرحية الشهيرة التي كتبها ألبير كامو عن الطاعون؟", 
        answer: "الطاعون (The Plague)",
        answered: false 
      }
    ]
  },
  {
    id: 'tech',
    name: 'التكنولوجيا',
    icon: '💻',
    questions: [
      { 
        value: 100, 
        question: "ما هو البروتوكول الذي يُستخدم في نقل الملفات بشكل آمن عبر الشبكة؟", 
        answer: "SFTP",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو اسم أول حاسوب إلكتروني عام الغرض؟", 
        answer: "إنياك",
        answered: false 
      },
      { 
        value: 100, 
        question: "من هو مخترع الويب العالمية؟", 
        answer: "تيم بيرنرز لي",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو اسم أول هاتف ذكي يعمل بنظام أندرويد؟", 
        answer: "تي-موبايل جي1",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو اسم أول لغة برمجة عالية المستوى؟", 
        answer: "فورتران",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم تقنية الشاشات المقاومة للكسر؟", 
        answer: "جوريلا جلاس",
        answered: false 
      },
      { 
        value: 100, 
        question: "في التكنولوجيا، ما كان أول كمبيوتر تجاري صدر عام 1951؟", 
        answer: "UNIVAC I",
        answered: false 
      },
      { 
        value: 100, 
        question: "في التكنولوجيا، أي لغة برمجة طورها Guido van Rossum عام 1991؟", 
        answer: "Python",
        answered: false 
      },
      { 
        value: 100, 
        question: "في التكنولوجيا، ما هو أول هاتف محمول يدوي قدم عام 1973؟", 
        answer: "Motorola DynaTAC 8000X",
        answered: false 
      },
      { 
        value: 100, 
        question: "في التكنولوجيا، من اخترع أول هاتف عملي؟", 
        answer: "Alexander Graham Bell",
        answered: false 
      },
      { 
        value: 100, 
        question: "في التكنولوجيا، ما هو أول متصفح ويب رسومي؟", 
        answer: "Mosaic",
        answered: false 
      },
      { 
        value: 100, 
        question: "في التكنولوجيا، أي شركة طورت أول معالج دقيق تجاري؟", 
        answer: "Intel",
        answered: false 
      },
      { 
        value: 100, 
        question: "في التكنولوجيا، من شارك في تأسيس شركة Apple إلى جانب Steve Jobs؟", 
        answer: "Steve Wozniak",
        answered: false 
      },
      { 
        value: 100, 
        question: "في التكنولوجيا، ما البروتوكول المستخدم للاتصال الآمن عبر الإنترنت؟", 
        answer: "HTTPS",
        answered: false 
      },
      { 
        value: 100, 
        question: "في التكنولوجيا، ما هو أول جهاز ألعاب فيديو منزلي صدر عام 1972؟", 
        answer: "Magnavox Odyssey",
        answered: false 
      },
      { 
        value: 100, 
        question: "في التكنولوجيا، أي لغة برمجة تُستخدم عادةً لتطبيقات الذكاء الاصطناعي؟", 
        answer: "Python",
        answered: false 
      },
      { 
        value: 100, 
        question: "في التكنولوجيا، من يُنسب إليه اختراع فأرة الكمبيوتر؟", 
        answer: "Douglas Engelbart",
        answered: false 
      },
      { 
        value: 100, 
        question: "في التكنولوجيا، أي لغة برمجة أنشأها James Gosling في Sun Microsystems؟", 
        answer: "Java",
        answered: false 
      },
      { 
        value: 100, 
        question: "في التكنولوجيا، ما هو أول كمبيوتر تجاري بواجهة مستخدم رسومية؟", 
        answer: "Xerox Star",
        answered: false 
      },
      { 
        value: 100, 
        question: "في التكنولوجيا، من يُعتبر \"أب الإنترنت\"؟", 
        answer: "Vint Cerf",
        answered: false 
      },
      { 
        value: 100, 
        question: "في التكنولوجيا، ما هو أول كاميرا رقمية محمولة قدمت عام 1975؟", 
        answer: "Kodak DCS-100",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو اسم أول جهاز كمبيوتر شخصي من شركة آي بي إم؟", 
        answer: "آي بي إم بي سي",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو اسم أول متصفح ويب تجاري؟", 
        answer: "نتسكيب نافيجيتور",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو مخترع البريد الإلكتروني؟", 
        answer: "راي توملينسون",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو اسم أول نظام تشغيل من مايكروسوفت؟", 
        answer: "إم إس-دوس",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو اسم أول لعبة فيديو تجارية؟", 
        answer: "بونغ",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو مخترع الماوس؟", 
        answer: "دوغلاس إنجلبارت",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو اسم أول حاسوب محمول؟5", 
        answer: "أوسبورن 1",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو مخترع الواي فاي؟", 
        answer: "فيك هايز",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو اسم أول هاتف ذكي من بلاكبيري؟", 
        answer: "بلاكبيري 5810",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو اسم أول نظارة واقع افتراضي من أوكولوس؟", 
        answer: "أوكولوس ريفت",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو اسم أول جهاز كروم بوك؟", 
        answer: "سامسونج سيريز 5 550",
        answered: false 
      },
      { 
        value: 200, 
        question: "في التكنولوجيا، أي شركة طورت أول كمبيوتر شخصي؟", 
        answer: "IBM",
        answered: false 
      },
      { 
        value: 200, 
        question: "في التكنولوجيا، من شارك في تأسيس Microsoft إلى جانب Bill Gates؟", 
        answer: "Paul Allen",
        answered: false 
      },
      { 
        value: 200, 
        question: "في التكنولوجيا، ما الوحدة التي تُقاس بها ذاكرة الكمبيوتر؟", 
        answer: "Byte",
        answered: false 
      },
      { 
        value: 200, 
        question: "في التكنولوجيا، أي شركة طورت أول فأرة كمبيوتر ذات واجهة رسومية؟", 
        answer: "Xerox",
        answered: false 
      },
      { 
        value: 200, 
        question: "في التكنولوجيا، بأي لغة برمجة أنشئت شبكة الويب العالمية الأصلية؟", 
        answer: "HTML",
        answered: false 
      },
      { 
        value: 200, 
        question: "في التكنولوجيا، من أنشأ أول خادم ويب؟", 
        answer: "Tim Berners-Lee",
        answered: false 
      },
      { 
        value: 200, 
        question: "في التكنولوجيا، ما كان أول محرك بحث؟", 
        answer: "Archie",
        answered: false 
      },
      { 
        value: 200, 
        question: "في التكنولوجيا، أي شركة طورت أول معالج دقيق ناجح تجارياً (Intel 4004 عام 1971)؟", 
        answer: "Intel",
        answered: false 
      },
      { 
        value: 200, 
        question: "في التكنولوجيا، ما هي أول لغة برمجة دعمت البرمجة الكائنية التوجه؟", 
        answer: "Simula",
        answered: false 
      },
      { 
        value: 200, 
        question: "في التكنولوجيا، أي شركة طورت أول قرص صلب من الحالة الثابتة (SSD)؟", 
        answer: "SanDisk",
        answered: false 
      },
      { 
        value: 200, 
        question: "في التكنولوجيا، ما هو أول موقع إلكتروني تم إنشاؤه؟", 
        answer: "http://info.cern.ch",
        answered: false 
      },
      { 
        value: 200, 
        question: "في التكنولوجيا، أي شركة طورت أول فأرة بصرية؟", 
        answer: "Microsoft",
        answered: false 
      },
      { 
        value: 200, 
        question: "في التكنولوجيا، ما هو أول فيروس حاسوبي؟", 
        answer: "Creeper",
        answered: false 
      },
      { 
        value: 200, 
        question: "في التكنولوجيا، أي شركة طورت أول كمبيوتر محمول؟", 
        answer: "Gavilan Computer Corporation",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو مؤسس شركة أوبر؟", 
        answer: "ترافيس كالانيك",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو عام إطلاق سبوتيفاي؟", 
        answer: "2008",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم البروتوكول المستخدم لنقل البريد الإلكتروني؟", 
        answer: "SMTP",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم تقنية الاتصال اللاسلكي قصيرة المدى؟", 
        answer: "NFC",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم الشريحة المسؤولة عن معالجة الرسومات في الحاسوب؟", 
        answer: "GPU",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم لغة البرمجة التي طورتها شركة أبل؟", 
        answer: "سويفت",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم بروتوكول نقل الملفات عبر الإنترنت؟", 
        answer: "FTP",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم تقنية العرض ثلاثية الأبعاد بدون نظارات؟", 
        answer: "التصوير المجسم",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم تقنية الشاشات المرنة القابلة للطي؟", 
        answer: "OLED",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم لغة البرمجة التي طورتها شركة جوجل؟", 
        answer: "جو",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم تقنية التعرف على بصمة الإصبع في الهواتف الذكية؟", 
        answer: "تاتش آي دي",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم منصة التطوير المفتوحة المصدر لإنشاء تطبيقات الويب؟", 
        answer: "نود جي إس",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم تقنية العرض التي تستخدم الإسقاط الضوئي على الأسطح؟", 
        answer: "الواقع المعزز",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم لغة البرمجة التي طورتها شركة مايكروسوفت؟", 
        answer: "سي شارب",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم نظام التشغيل الذي يعمل على أجهزة راسبيري باي؟", 
        answer: "راسبيان",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم تقنية التعرف على الكلام وتحويله إلى نص؟", 
        answer: "التعرف على الكلام",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم منصة التطوير المستخدمة لإنشاء تطبيقات الهواتف الذكية؟", 
        answer: "فلاتر",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم لغة البرمجة المستخدمة لتطوير تطبيقات الأندرويد؟", 
        answer: "كوتلن",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اختصار \"Domain Name System\"؟", 
        answer: "DNS",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم تقنية التعرف على الأشياء في الصور؟", 
        answer: "رؤية الكمبيوتر",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما هو أول ناجح لإعادة استخدام معزز صاروخي من SpaceX؟", 
        answer: "Falcon 9",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي لغة برمجة سُميت نسبةً لأجواء كازينو مونتي كارلو؟", 
        answer: "Java",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول هاتف ذكي؟", 
        answer: "IBM Simon Personal Communicator",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ماذا يشير مصطلح BigTech؟", 
        answer: "التسمية الجماعية لكبرى شركات التكنولوجيا مثل Apple وGoogle وAmazon وMeta وMicrosoft",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة تُعرف بتطوير أجهزة الحوسبة الكمومية؟", 
        answer: "D-Wave Systems",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول شاشة تعمل باللمس تجارية؟", 
        answer: "IBM",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي جهة تُنسب إليها فكرة البلوكشين في المنتجات التجارية؟", 
        answer: "Satoshi Nakamoto",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول شبكة هاتف محمول تعمل بتقنية 5G؟", 
        answer: "Huawei",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول حاسوب يمكن ارتداؤه؟", 
        answer: "Xerox PARC",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول مساعد صوتي ذكي؟", 
        answer: "Apple (Siri)",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة أنتجت أول سيارة كهربائية ناجحة (EV1)؟", 
        answer: "General Motors",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما هو أول نظام تشغيل من مايكروسوفت؟", 
        answer: "MS-DOS",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ماذا يشير مصطلح \"4K\" في تقنيات العرض؟", 
        answer: "دقة تقارب 4000 بكسل أفقياً",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول هاتف ذكي يعمل بالطاقة الشمسية؟", 
        answer: "LG",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول ساعة ذكية؟", 
        answer: "Samsung (Galaxy Gear, 2013)",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول خدمة توصيل بواسطة طائرات بدون طيار؟", 
        answer: "Zipline",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول هاتف ذكي قابل للطي؟", 
        answer: "Royole (FlexPai, 2018)",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول عرض هولوجرافي؟", 
        answer: "Looking Glass Factory",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول واجهة بين الدماغ والكمبيوتر؟", 
        answer: "Neuralink",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول كمبيوتر كمومي تجاري؟", 
        answer: "D-Wave Systems",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول شاشة بدقة 8K؟", 
        answer: "Sharp Corporation",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول نظام تحقق بيومتري ناجح؟", 
        answer: "IBM",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول سيارة ذاتية القيادة ناجحة؟", 
        answer: "Waymo",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول هاتف ذكي بدعم تقنية 5G؟", 
        answer: "Samsung (Galaxy S10 5G, 2019)",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول كاميرا بزاوية 360 درجة؟", 
        answer: "Ricoh (Ricoh Theta, 2013)",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول بدلة خارج هيكلية ناجحة؟", 
        answer: "Ekso Bionics (2010)",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول خدمة إنترنت عبر الأقمار الصناعية تجارية؟", 
        answer: "Iridium Communications (1998)",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول كاميرا تجارية بدقة 4K؟", 
        answer: "Red Digital Cinema (2006)",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول بطارية قائمة على الجرافين؟", 
        answer: "Graphenect (2013)",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول عدسات اتصال واقع معزز تجارية؟", 
        answer: "Mojo Vision (2020)",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول هاتف ذكي يعمل بنظام Android؟", 
        answer: "HTC Dream",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، في أي عام تأسست شركة Google؟", 
        answer: "1998",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة اخترعت نظام التشغيل iOS؟", 
        answer: "Apple",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، في أي عام تم إطلاق موقع YouTube؟", 
        answer: "2005",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، من يُعتبر المؤسس الرئيسي لشركة Tesla؟", 
        answer: "Elon Musk",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما هو أول طراز من سيارات Tesla؟", 
        answer: "Tesla Roadster",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، في أي عام صدر أول iPhone؟", 
        answer: "2007",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما اسم نظام التشغيل الذي تطوره Apple لأجهزتها المحمولة؟", 
        answer: "iOS",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما اسم أول جهاز كمبيوتر محمول أنتجته IBM؟", 
        answer: "IBM 5100",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، من يُنسب إليه تطوير تقنية MP3؟", 
        answer: "Fraunhofer Society",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما اسم أول شبكة اجتماعية واسعة الانتشار؟", 
        answer: "SixDegrees",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما اسم أول متصفح ويب شائع من شركة Microsoft؟", 
        answer: "Internet Explorer",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، من اخترع لغة البرمجة C؟", 
        answer: "Dennis Ritchie",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما اسم أول كمبيوتر محمول أطلقته شركة Compaq؟", 
        answer: "Compaq Portable",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما اسم أول منصة بودكاست شهيرة؟", 
        answer: "iTunes",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، من أسس شركة Amazon؟", 
        answer: "Jeff Bezos",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما اسم أول جهاز لوحي تجاري؟", 
        answer: "iPad",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما اسم أول نظام تشغيل للهواتف من شركة Nokia؟", 
        answer: "Symbian",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي جهة طورت أول تقنية شحن لاسلكي معيار Qi؟", 
        answer: "Wireless Power Consortium",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، في أي عام تم إصدار لعبة الفيديو الشهيرة \"Pong\"؟", 
        answer: "1972",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما اسم أول هاتف يعمل بتقنية GSM؟", 
        answer: "Motorola International 3200",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما اسم أول جهاز لوحي يعمل بنظام Android؟", 
        answer: "Nexus 7",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، من أسس شركة Facebook؟", 
        answer: "Mark Zuckerberg",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما اسم أول نظام تشغيل ويب من شركة Microsoft؟", 
        answer: "Internet Explorer",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما هو أول معالج من سلسلة Intel Core؟", 
        answer: "Intel Core Duo",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما اسم أول جهاز كمبيوتر شخصي مبني على نظام Windows؟", 
        answer: "IBM PC",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما اسم أول جهاز كمبيوتر محمول مبني على نظام Windows؟", 
        answer: "IBM PC",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما هو أول نظام تشغيل للسيارات الذكية؟", 
        answer: "QNX",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، من اخترع الطابعة ثلاثية الأبعاد؟", 
        answer: "Chuck Hull",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما اسم أول تطبيق للمراسلة الفورية؟", 
        answer: "ICQ",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما هو أول جهاز يعتمد على تقنية الواقع الافتراضي؟", 
        answer: "Sensorama",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، أي شركة طورت أول طابعة ليزر تجارية؟", 
        answer: "IBM",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما اسم أول كمبيوتر متعدد النوى للمستهلكين؟", 
        answer: "AMD Athlon 64 X2",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، من ساهم في تطوير تشفير RSA؟", 
        answer: "Dennis Ritchie, Shamir, and Adleman (ثلاثة علماء RSA)",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما اسم أول هاتف ذكي يدعم تقنية الواقع المعزز؟", 
        answer: "Samsung Galaxy S4",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما اسم أول جهاز كمبيوتر محمول يستخدم في التعليم؟", 
        answer: "OLPC XO",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما اسم أول منصة تجارة إلكترونية واسعة الانتشار؟", 
        answer: "eBay",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، من اخترع تقنية الفلاش (Flash Memory)؟", 
        answer: "Fujio Masuoka",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، ما اسم أول نظام تشغيل مبني على Linux للأجهزة الشخصية؟", 
        answer: "Ubuntu",
        answered: false 
      },
      { 
        value: 300, 
        question: "في التكنولوجيا، من يُعتبر مبتكر أول نظام تشغيل للسيارات الذكية؟", 
        answer: "QNX",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هو اسم أول حاسوب محمول؟", 
        answer: "أوسبورن 1.",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم أول هاتف محمول في العالم؟", 
        answer: "موتورولا دايناتاك 8000إكس",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو مؤسس شركة لينكد إن؟", 
        answer: "ريد هوفمان",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو مخترع البلوتوث؟", 
        answer: "جاب هارتسن",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو مؤسس شركة نتفليكس؟", 
        answer: "ريد هاستينغز",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو اسم أول هاتف ذكي من سامسونج؟", 
        answer: "سامسونج إس بي إي-i300",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو مخترع رمز الاستجابة السريعة (QR)؟", 
        answer: "ماساهيرو هارا",
        answered: false 
      }
    ]
  },
  {
    id: 'anime',
    name: 'الأنمي والمانجا',
    icon: '🎌',
    questions: [
      { 
        value: 100, 
        question: "كم عدد الأوتشيها الذين نجوا من مذبحة عشيرة الأوتشيها؟", 
        answer: "2 (ساسكي وإيتاشي)",
        answered: false 
      },
      { 
        value: 100, 
        question: "كم عدد العناصر الأساسية للطاقة التشاكرا؟", 
        answer: "5",
        answered: false 
      },
      { 
        value: 100, 
        question: "من كان أول عضو من طاقم قبعة القش يظهر في الأنمي؟", 
        answer: "مونكي دي. لوفي",
        answered: false 
      },
      { 
        value: 100, 
        question: "كم كان عمر لوفي قبل السكيب؟", 
        answer: "17 سنة",
        answered: false 
      },
      { 
        value: 100, 
        question: "أين تم إعدام جول دي. روجر؟", 
        answer: "في لوغوتاون",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الكلب في مدينة أورينج؟", 
        answer: "تشوشو",
        answered: false 
      },
      { 
        value: 100, 
        question: "صح/خطأ: غايمون ليس من الحشو؟", 
        answer: "صحيح",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما كانت أول جائزة لناروتو؟", 
        answer: "30,000,000 بيري",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هي أول جزيرة زارها طاقم قبعة القش في الجراند لاين؟", 
        answer: "جبل العكوس",
        answered: false 
      },
      { 
        value: 100, 
        question: "صح/خطأ: سانجي قد قاتل باستخدام يديه؟", 
        answer: "خطأ",
        answered: false 
      },
      { 
        value: 100, 
        question: "هل التيتان النقيين لا عقل لهم؟", 
        answer: "نعم",
        answered: false 
      },
      { 
        value: 100, 
        question: "أين تقع الرواية؟", 
        answer: "لوس أنجلوس",
        answered: false 
      },
      { 
        value: 100, 
        question: "صح أو خطأ: عند تعيينها من قبل L، كانت ناومي ميسورا بالفعل تحقق في جرائم القتل في لوس أنجلوس BB مع الـFBI؟", 
        answer: "صحيح",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو النوع الخاص ببوكيمون 'غارتشومب'؟", 
        answer: "تنين/أرض",
        answered: false 
      },
      { 
        value: 100, 
        question: "في أي جيل تم تقديم نوع الفيري؟", 
        answer: "الجيل السادس",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي من بوكيمونات الأسطورة ليس بوكيمون أسطوري؟", 
        answer: "غارتشومب",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو اسم المنطقة في بوكيمون صن ومون؟", 
        answer: "ألولا",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي بوكيمون يمكن أن يتطور إلى أشكال مختلفة بناءً على بعض الشروط؟", 
        answer: "إيفي",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما هو الحد الأقصى لعدد بوكيمونات يمكن أن يحملها اللاعب في فريق؟", 
        answer: "6",
        answered: false 
      },
      { 
        value: 200, 
        question: "كم عدد إشارات اليد/الأختام التي يمتلكها هجوم 'كرة تنين الماء'؟", 
        answer: "6",
        answered: false 
      },
      { 
        value: 200, 
        question: "كم عدد طرق باين التي هزمها جيرايا؟", 
        answer: "1",
        answered: false 
      },
      { 
        value: 200, 
        question: "كم مرة فشل ناروتو في اختبار التخرج من الأكاديمية؟", 
        answer: "3 مرات",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي من هؤلاء الشينوبي لا يستطيع استخدام جميع العناصر الأساسية للطاقة التشاكرا؟", 
        answer: "كاكاشي هاتاكي",
        answered: false 
      },
      { 
        value: 200, 
        question: "من كانت ميتو أوزوماكي متزوجة؟", 
        answer: "هاشيراما سينجو",
        answered: false 
      },
      { 
        value: 200, 
        question: "من الذي أنشأ التشيدوري بعد فشله في تطبيق طاقته البرقية على الراسينغان؟", 
        answer: "كاكاشي هاتاكي",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي طريق من طرق باين هزمه كونوهامارو خلال هجوم باين؟", 
        answer: "طريق الإنسان",
        answered: false 
      },
      { 
        value: 200, 
        question: "من كان أول خصم في 'ون بيس'؟", 
        answer: "ألفيدا",
        answered: false 
      },
      { 
        value: 200, 
        question: "من كان أول قبطان في البحرية يتم تقديمه؟", 
        answer: "دراكول ميهوك",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو اسم أول سفينة لطاقم قبعة القش؟", 
        answer: "'غوينغ ميري'",
        answered: false 
      },
      { 
        value: 200, 
        question: "كم عدد البيريات التي كان على نامي جمعها من أجل أرجون في مقابل تحرير قرية كوكوياسي؟", 
        answer: "100,000,000 بيري",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو لقب سموكر؟", 
        answer: "المطاردة البيضاء",
        answered: false 
      },
      { 
        value: 200, 
        question: "أين وُلِد سانجي؟", 
        answer: "البحر الشمالي",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم طاقم بروك القديم؟", 
        answer: "قراصنة رمبار",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هزم مس دوبلفينغر في آلاباستا؟", 
        answer: "نامي",
        answered: false 
      },
      { 
        value: 200, 
        question: "من كان أول أميرال في البحرية يتم تقديمه؟", 
        answer: "أميرال أوكيجي",
        answered: false 
      },
      { 
        value: 200, 
        question: "من كان الأدميرال الأسطول للبحرية منذ 3 عقود؟", 
        answer: "سينغوكو",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي سلاح استخدمه أوسوب... سوغيكينغ لإطلاق علم الحكومة العالمية في إنيس لوبي؟", 
        answer: "بندقية قناصة",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو الراوي في 'ملاحظة الموت: أخرى'؟", 
        answer: "ناومي ميسورا",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما الاسم الذي استخدمه بيوند بيرثداي عندما قابل ناومي ميسورا؟", 
        answer: "بيوند",
        answered: false 
      },
      { 
        value: 200, 
        question: "في أي مستوى يتطور نويبوت؟", 
        answer: "المستوى 48",
        answered: false 
      },
      { 
        value: 200, 
        question: "كم عدد التطورات الضخمة الموجودة؟", 
        answer: "46",
        answered: false 
      },
      { 
        value: 200, 
        question: "كم يستمر دورة اليوم/الليل في بوكيمون سكارليت وفايوليت؟", 
        answer: "24 ساعة",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي بوكيمون يُعرف بـ 'بوكيمون الأيون'؟", 
        answer: "لاتيوس ولاتياس",
        answered: false 
      },
      { 
        value: 200, 
        question: "من هو البطل الحالي لمنطقة جالار في بوكيمون سورد وشيلد؟", 
        answer: "ليون",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف يفتح الأوتشيها 'مانجيكيو شارينغان'؟", 
        answer: "من خلال مشاهدة وفاة شخص مقرب منهم",
        answered: false 
      },
      { 
        value: 300, 
        question: "من سجل أعلى درجة في تاريخ امتحان أكاديمية كونوها؟", 
        answer: "إيروكا أومينو",
        answered: false 
      },
      { 
        value: 300, 
        question: "كم عدد الذيل كان لدى ناروتو أثناء القتال مع ساسكي في نهاية الجزء الأول؟", 
        answer: "ذيلين",
        answered: false 
      },
      { 
        value: 300, 
        question: "كيف حصل كينكاو و جينكاو (الأخوان الذهب والفضة) على تشاكرا الكوراما؟", 
        answer: "من خلال قتل جينتشوريكي",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو اسم البوابة السابعة من الثماني بوابات؟", 
        answer: "بوابة العجب",
        answered: false 
      },
      { 
        value: 300, 
        question: "كم عدد السيوف التي يمكن أن يستخدمها كيلر بي في نفس الوقت؟", 
        answer: "8 سيوف (واحدة لكل ذيل)",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو الوقت المتوسط الذي يستغرقه الشينوبي للسفر من كونوها (قرية الورق المخفية) إلى سونا (قرية الرمال المخفية)؟", 
        answer: "3 أيام",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما كان الاسم الأصلي للراسينغان الذي أعطاه ميناتو؟", 
        answer: "الكرة الدوارة",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما كان أول هجوم مسمى استخدمه لوفي؟", 
        answer: "'غوم-غوم بيسطول'",
        answered: false 
      },
      { 
        value: 300, 
        question: "كم مرة خسر زورو من كويينا؟", 
        answer: "200 مرة",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي فاكهة شيطان ظهرت لأول مرة بعد فاكهة لوفي؟", 
        answer: "فاكهة سونا سونا نو مي (فاكهة الرمل)",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي سيف يستخدمه زورو بفمه؟", 
        answer: "سانداي كيتسو",
        answered: false 
      },
      { 
        value: 300, 
        question: "في أي قوس ارتدت نيكو روبين هذا الزي؟", 
        answer: "ووتر 7",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو والد إيس البيولوجي؟", 
        answer: "جول دي. روجر",
        answered: false 
      },
      { 
        value: 300, 
        question: "أين ظهرت سلاح نامي (كليما-تكت) لأول مرة؟", 
        answer: "بارك أرلونغ",
        answered: false 
      },
      { 
        value: 300, 
        question: "من كان طبيب طاقم جول دي. روجر؟", 
        answer: "الدكتور كروكوس",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي شخصية لديها هوس بالفطائر الكرز؟", 
        answer: "فرانكي",
        answered: false 
      },
      { 
        value: 300, 
        question: "لمن وثق توم في مخططات 'بلوتون'؟", 
        answer: "فرانكي",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو لون الحلزون الناقل الذي يُستخدم لاستدعاء 'باستر كول'؟", 
        answer: "أحمر",
        answered: false 
      },
      { 
        value: 300, 
        question: "من قام بتخريب معدات إيرين خلال قوس تدريب متدربي الدفعة 104؟", 
        answer: "جيان كيرستين",
        answered: false 
      },
      { 
        value: 300, 
        question: "متى رأى إيرين أولاً ذكرياته المستقبلية؟", 
        answer: "خلال الهجوم على شيغانشينا",
        answered: false 
      },
      { 
        value: 300, 
        question: "من كان آخر قائد منتخب لفريق الاستطلاع؟", 
        answer: "إيروين سميث",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هي الدمى التي تُركت في مسارح الجريمة؟", 
        answer: "'دمى بي بي'",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي من الأمور التالية لم يستهلكها بيوند بيرثداي أمام ناومي ميسورا؟", 
        answer: "الكحول",
        answered: false 
      },
      { 
        value: 300, 
        question: "لماذا يكتب ميليو هذا الكتاب؟", 
        answer: "لكشف جرائم بيوند بيرثداي",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو أعلى مستوى تطور؟", 
        answer: "التطور الضخم",
        answered: false 
      },
      { 
        value: 300, 
        question: "متى تم إصدار بوكيمون دايموند وبيرل؟", 
        answer: "2006",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي حركة تسبب أكبر ضرر لبوكيمون من نوع الشبح؟", 
        answer: "كرانش",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بوكيمون يُعرف بحركته الخاصة 'سباسيال ريند'؟", 
        answer: "بالكيا",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بوكيمون يُعرف بـ 'حامي البحر'؟", 
        answer: "لوغيا",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بوكيمون يُعرف بـ 'بوكيمون الزمن'؟", 
        answer: "سيليبي",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هي الحركة التي تسبب حالة 'الحرق'؟", 
        answer: "ويل-أو-ويسب",
        answered: false 
      },
      { 
        value: 300, 
        question: "كم عدد الأشكال التطورية التي يمتلكها إيفي؟", 
        answer: "9",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بوكيمون يُعرف بـ 'سيف العدالة'؟", 
        answer: "كيلديو",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي حركة تزيد من سرعة وقوة الهجوم للبوكيمون ولكن تقلل من دفاعه؟", 
        answer: "رقصة التنين",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بوكيمون يمكن أن يمتلك القدرة 'مولتيسكال'؟", 
        answer: "دراجونيت",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بوكيمون يُعرف بـ 'بوكيمون الأسود العميق'؟", 
        answer: "زيكروم",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو الشكل التطوري لبوكيمون بوريغون-زد؟", 
        answer: "بوريغون2",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو البوكيمون الأسطوري في بوكيمون إكس؟", 
        answer: "زيرنياس",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي بوكيمون يمكن أن يتطور إلى جارشومب ضخم؟", 
        answer: "غارتشومب",
        answered: false 
      },
      { 
        value: 400, 
        question: "من قتل توبيـراما سينجو؟", 
        answer: "كينكاو و جينكاو (الأخوان الذهب والفضة)",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هو قياس صدر تسونادي؟", 
        answer: "102 سم",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف ماتت الأم بالتبني لكابوتو، نونو ياكوشي؟", 
        answer: "انتحرت بعد اكتشافها حقيقة أصل كابوتو",
        answered: false 
      },
      { 
        value: 400, 
        question: "من بين هؤلاء، ما هو الوحش ذو الذيل الذي تم تعيين كونان لالتقاطه؟", 
        answer: "الوحش ذو الذيل الثاني، ماتاتابي",
        answered: false 
      },
      { 
        value: 400, 
        question: "من هؤلاء الشخصيات لا يستطيع استخدام 'هكي المراقبة'؟", 
        answer: "فرانكي",
        answered: false 
      },
      { 
        value: 400, 
        question: "كم سنة تجول يامير خارج الجدران كتيتان نقي؟", 
        answer: "60 سنة",
        answered: false 
      },
      { 
        value: 400, 
        question: "كيف يمكن أن يطير تيتان فالكو؟", 
        answer: "بسبب وراثته لقدرة تيتان الوحش",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم المجموعة الإلدية التي انضم إليها غريشا ييغر ودينا فريتز؟", 
        answer: "'المنظمات الإلدية الإصلاحية'",
        answered: false 
      },
      { 
        value: 400, 
        question: "لماذا خان زيكي والدي غريشا ودينا في 'المنظمات الإصلاحية' إلى مارلي؟", 
        answer: "لحماية نفسه والنجاة من العقاب",
        answered: false 
      },
      { 
        value: 400, 
        question: "خلال وقت بيوند بيرثداي في منزل وامي، أُعطي الحرف B. ماذا كان يعني 'B' وفقًا لميلو؟", 
        answer: "'عيد ميلاده'",
        answered: false 
      },
      { 
        value: 400, 
        question: "وُلد بيوند بيرثداي بقدرة خارقة ساعدته في جرائمه. ما هي؟", 
        answer: "القدرة على التلاعب بسلوك الآخرين",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي من بوكيمون البداية بالكامل لديه أكبر عدد من الضعف؟", 
        answer: "إنفيرنيبي",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هي القوة الخاصة لبالافين هيرو؟", 
        answer: "80",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي من تركيبات الأنواع التالية لم تُعطَ لأي بوكيمون؟", 
        answer: "شبح/صخر",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي بوكيمون يمكن أن يتغير نوعه بناءً على العنصر الذي يحمله؟", 
        answer: "آرسياس",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي بوكيمون لديه حركة خاصة تسمى 'حكم'؟", 
        answer: "آرسياس",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هو اسم ثلاثي الطيور الأسطورية في بوكيمون؟", 
        answer: "زابدوس، آرتيكونو، مولتريس",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هو النوع الأساسي للبوكيمون تابو كوكو؟", 
        answer: "كهرباء/خرافية",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي بوكيمون يمتلك حركة ضخمة تُحول إلى شكل يشبه ناطحة السحاب؟", 
        answer: "دورالودون",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي بوكيمون يُعرف بـ 'رابطة المعركة' عندما يرتبط مع مدربه؟", 
        answer: "آش-غرينينجا",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هو تأثير حركة 'سبور'؟", 
        answer: "يضع الهدف في النوم",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي بوكيمون يتمتع بقدرة خاصة تسمى 'المقاييس المتعددة'؟", 
        answer: "شيدينجا",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هي القدرة الخاصة للبوكيمون سابلاي؟", 
        answer: "غراند زوم",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي بوكيمون يُعرف بـ 'الحماية الكونية'؟", 
        answer: "فيلي",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي ميزوكاجي كانت جينتشوريكي للوحش ذو الثلاث ذيول، إيزوبو؟", 
        answer: "مي تيرومي",
        answered: false 
      },
      { 
        value: 500, 
        question: "من يُعتبر إله الشينوبي؟", 
        answer: "هيروزين ساروتوبي",
        answered: false 
      },
      { 
        value: 500, 
        question: "2 من 3 أعضاء في فريق ميناتو أصبحوا جينتشوريكي. من هم؟", 
        answer: "ناروتو أوزوماكي و كيلر بي",
        answered: false 
      },
      { 
        value: 500, 
        question: "كيف يتم نقل القدرة على التحول إلى تيتان؟", 
        answer: "عن طريق حقن سائل عمود الفقري للتيتان في شخص آخر",
        answered: false 
      },
      { 
        value: 500, 
        question: "ماذا كان سيحدث للباراديس إذا قالت ميكاسا لإيرين أنها تحبه تلك الليلة في مارلي؟", 
        answer: "كان سيتم إنقاذ الباراديس من تدمير إيرين",
        answered: false 
      },
      { 
        value: 500, 
        question: "من كان يُعتبر أقوى جندي للبشرية؟", 
        answer: "ليفي آكرمان",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هي الضعف الوحيد للنوع الحشرة/الصلب في البوكيمون؟", 
        answer: "النار",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هو أول بوكيمون تم إنشاؤه؟", 
        answer: "رايدون",
        answered: false 
      },
      { 
        value: 500, 
        question: "من هو أول بوكيمون تم إنشاؤه؟", 
        answer: "رايدون",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي بوكيمون لديه أعلى إجمالي للأساسي في جميع البوكيمونات؟", 
        answer: "راي كوازا الضخم",
        answered: false 
      }
    ]
  },
  {
    id: 'friends',
    name: 'فريندز',
    icon: '👫',
    questions: [
      { 
        value: 100, 
        question: "ما هي أسماء الشخصيات الرئيسية الستة في مسلسل فريندز؟", 
        answer: "Ross, Rachel, Monica, Chandler, Joey, and Phoebe",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم المقهى الذي يقضي فيه الأصدقاء معظم أوقاتهم؟", 
        answer: "Central Perk",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي من الشخصيات كانت تسكن معًا في بداية المسلسل؟", 
        answer: "Joey and Chandler, Monica and Rachel",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما الاسم الكامل لكلب روس ومونيكا عندما كانوا أطفالاً؟", 
        answer: "Chi-Chi",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما لون باب شقة مونيكا؟", 
        answer: "Purple",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي شخصية تقول الجملة الأولى في الحلقة الأولى؟", 
        answer: "Monica",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي ممثل كان من الممكن أن يُختار بدلاً من Matt LeBlanc لأداء دور Joey؟", 
        answer: "Hank Azaria",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الزوجة الثانية لروس؟", 
        answer: "Emily Waltham",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما الاسم الكامل لجوي؟", 
        answer: "Joseph Francis Tribbiani Jr",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم الممثل الشهير الذي يؤدي دور زوج Phoebe، Mike؟", 
        answer: "Paul Rudd",
        answered: false 
      },
      { 
        value: 100, 
        question: "من كان خطيب رايتشل الأول؟", 
        answer: "Barry Farber",
        answered: false 
      },
      { 
        value: 100, 
        question: "أي من أخوات جوي قبّلها Chandler؟", 
        answer: "Mary Angela",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم والدة روس ومونيكا؟", 
        answer: "Judy Geller",
        answered: false 
      },
      { 
        value: 100, 
        question: "كم مرة تزوج روس؟", 
        answer: "Three times",
        answered: false 
      },
      { 
        value: 100, 
        question: "من كان أول حبيب جاد لمونيكا معروف للجميع؟", 
        answer: "Richard Burke",
        answered: false 
      },
      { 
        value: 100, 
        question: "من يقيم زفاف مونيكا وتشاندلر؟", 
        answer: "Joey",
        answered: false 
      },
      { 
        value: 100, 
        question: "من كانت أول مديرة لرايتشل في Ralph Lauren؟", 
        answer: "Joanna",
        answered: false 
      },
      { 
        value: 100, 
        question: "ما اسم زوج Janice؟", 
        answer: "Gary Litman",
        answered: false 
      },
      { 
        value: 100, 
        question: "بماذا يسمي Joey بطريقه المحشو؟", 
        answer: "Hugsy",
        answered: false 
      },
      { 
        value: 100, 
        question: "أين قررت مونيكا وتشاندلر الانتقال في الموسم الأخير؟", 
        answer: "Westchester, New York",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو عمل Chandler Bing لمعظم المسلسل؟", 
        answer: "التحليل الإحصائي وإعادة تنظيم البيانات (لاحقاً الإعلان)",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي من الأصدقاء عملت كمدلكة؟", 
        answer: "Phoebe Buffay",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم شخصية Joey في \"Days of Our Lives\"؟", 
        answer: "Dr. Drake Ramoray",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما هو عمل روس؟", 
        answer: "Paleontologist",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم العطر الذي تروج له رايتشل في أول وظيفة لها بعد عملها كنادلة؟", 
        answer: "Sparkle\" by Ralph Lauren",
        answered: false 
      },
      { 
        value: 200, 
        question: "لماذا يترك Chandler عمله في التحليل الإحصائي؟", 
        answer: "لأنه يدرك أنه يكرهه وينتقل إلى مجال الإعلان",
        answered: false 
      },
      { 
        value: 200, 
        question: "بماذا تعمل مونيكا؟", 
        answer: "She is a chef",
        answered: false 
      },
      { 
        value: 200, 
        question: "من يتم فصلُه من وظيفته في اليوم الأول؟", 
        answer: "Chandler (من تدريب غير مدفوع في الإعلان)",
        answered: false 
      },
      { 
        value: 200, 
        question: "من يعمل في متحف لمعظم المسلسل؟", 
        answer: "Ross Geller",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما الفاكهة التي يعاني روس من حساسية تجاهها؟", 
        answer: "Kiwi",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما اسم قرد روس؟", 
        answer: "Marcel",
        answered: false 
      },
      { 
        value: 200, 
        question: "ماذا يشتري Joey عندما يحصل أخيراً على راتبه الكبير الأول؟", 
        answer: "تمثال كبير لكلب خزفي (Pat the Dog)",
        answered: false 
      },
      { 
        value: 200, 
        question: "أي من الأصدقاء عُرف بأنه علق في بهو جهاز الصراف الآلي مع عارضة أزياء؟", 
        answer: "Chandler",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما الأغنية التي تجدها إيما، ابنة روس ورايتشل، مضحكة؟", 
        answer: "Baby Got Back\" by Sir Mix-a-Lot",
        answered: false 
      },
      { 
        value: 200, 
        question: "ما الذي يخسره Joey وChandler في رهان مع مونيكا ورايتشل؟", 
        answer: "شقتهما",
        answered: false 
      },
      { 
        value: 200, 
        question: "ماذا يفعل الأصدقاء في عيد الشكر كل عام؟", 
        answer: "يتناولون عشاء عيد الشكر معاً",
        answered: false 
      },
      { 
        value: 200, 
        question: "من يُحبَس في بهو جهاز الصراف الآلي أثناء انقطاع التيار الكهربائي؟", 
        answer: "Chandler",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو ابن روس؟", 
        answer: "Ben Geller",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هي أصغر شقيقتي Joey؟", 
        answer: "Gina",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هي أسماء والدي روس ومونيكا؟", 
        answer: "Jack and Judy Geller",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الأخت الصغرى لرايتشل التي تظهر في عدة حلقات؟", 
        answer: "Jill Green",
        answered: false 
      },
      { 
        value: 300, 
        question: "من هو والد توائم Phoebe الثلاثة؟", 
        answer: "Frank Buffay Jr",
        answered: false 
      },
      { 
        value: 300, 
        question: "بماذا سمّت مونيكا وتشاندلر التوأم المتبنيين؟", 
        answer: "Erica and Jack",
        answered: false 
      },
      { 
        value: 300, 
        question: "بماذا يُسمي Joey كرسيه؟", 
        answer: "Rosita",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم المرأة التي أنجبت التوأم المتبنيين لمونيكا وتشاندلر؟", 
        answer: "Erica",
        answered: false 
      },
      { 
        value: 300, 
        question: "بماذا تنكر روس ليعلم بن عن عيد الحانوكا؟", 
        answer: "The Holiday Armadillo",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم والد رايتشل؟", 
        answer: "Dr. Leonard Green",
        answered: false 
      },
      { 
        value: 300, 
        question: "بماذا تغير Phoebe اسمها بعد الزواج؟", 
        answer: "Princess Consuela Bananahammock",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو طعام Joey المفضل؟", 
        answer: "Sandwiches",
        answered: false 
      },
      { 
        value: 300, 
        question: "من يسرق الكتاب الهزلي \"Science Boy\" من روس؟", 
        answer: "Phoebe",
        answered: false 
      },
      { 
        value: 300, 
        question: "من يغني النشيد الرئيسي لمسلسل فريندز؟", 
        answer: "The Rembrandts",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما هو الاسم الأوسط لتشاندلر؟", 
        answer: "Muriel",
        answered: false 
      },
      { 
        value: 300, 
        question: "أي عيد يكرهه روس؟", 
        answer: "Halloween",
        answered: false 
      },
      { 
        value: 300, 
        question: "من الشخصية الشهيرة التي تعتقد Phoebe أنها جدها؟", 
        answer: "Albert Einstein",
        answered: false 
      },
      { 
        value: 300, 
        question: "من يتبول على ساق مونيكا بعد أن لُدغت من قنديل البحر؟", 
        answer: "Chandler",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما اسم الأغنية التي اشتهرت بها Phoebe في الغناء؟", 
        answer: "Smelly Cat",
        answered: false 
      },
      { 
        value: 300, 
        question: "ما الذي لا يشاركه Joey أبداً؟", 
        answer: "Food",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم بطريق Joey المحشو؟", 
        answer: "Hugsy",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي من الأصدقاء صرخت شهيرًا \"Pivot! Pivot! Pivot!\"؟", 
        answer: "Ross",
        answered: false 
      },
      { 
        value: 400, 
        question: "ماذا يشتري روس لهدية عيد ميلاد رايتشل في الموسم الأول؟", 
        answer: "A brooch",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما الفاكهة التي يسرقها Chandler من ثلاجة مونيكا مدعياً أنه يعاني من حساسية تجاهها؟", 
        answer: "Grapefruit",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما الأغنية التي تجعل إيما، ابنة روس ورايتشل، تضحك؟", 
        answer: "Baby Got Back",
        answered: false 
      },
      { 
        value: 400, 
        question: "من الذي علق رأسه داخل ديك رومي؟", 
        answer: "Joey (في فلاش باك) وMonica (مقلب حلقة عيد الشكر)",
        answered: false 
      },
      { 
        value: 400, 
        question: "من يكسر وحدة الترفيه العملاقة لـ Joey؟", 
        answer: "The thief who tricks Joey into getting inside it",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي شخصية من فريندز لها توأم مطابق؟", 
        answer: "Phoebe (أختها التوأم Ursula Buffay)",
        answered: false 
      },
      { 
        value: 400, 
        question: "ماذا تصنع مونيكا لإبهار مدير تشاندلر؟", 
        answer: "Mac and cheese",
        answered: false 
      },
      { 
        value: 400, 
        question: "ماذا يفعل Joey للحصول على دور في فيلم لأل Pacino؟", 
        answer: "He’s Al Pacino’s body double’s butt double",
        answered: false 
      },
      { 
        value: 400, 
        question: "من يفصل رايتشل من عملها كنادلة في Central Perk؟", 
        answer: "Gunther",
        answered: false 
      },
      { 
        value: 400, 
        question: "لأي شركة يعمل Chandler قبل تغيير مساره المهني؟", 
        answer: "He works in statistical analysis and data reconfiguration",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم شقيق التوأم الشرير لشخصية Joey في مسلسل الصابون؟", 
        answer: "Striker Ramoray",
        answered: false 
      },
      { 
        value: 400, 
        question: "أي شخصية مشهورة توظف مونيكا كرئيسة للطهاة؟", 
        answer: "Alessandro (لكنها تحصل لاحقاً على وظيفة في Javu)",
        answered: false 
      },
      { 
        value: 400, 
        question: "لماذا يُعلق روس من المتحف؟", 
        answer: "لأنه يصرخ في مديره بسبب ساندويتش",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما اسم العطر الذي يخوض Joey تجارب أداء ليكون وجهه؟", 
        answer: "Homme",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما الوظيفة التي تحصل عليها رايتشل في نهاية المسلسل؟", 
        answer: "وظيفة في Louis Vuitton بباريس",
        answered: false 
      },
      { 
        value: 400, 
        question: "ماذا يفعل Chandler بعد تركه وظيفته في الشركة؟", 
        answer: "يصبح كاتب إعلانات مبتدئ",
        answered: false 
      },
      { 
        value: 400, 
        question: "ما هي الماركة الفاخرة التي تعمل بها رايتشل قبل عرض Louis Vuitton؟", 
        answer: "Ralph Lauren",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما اسم ابنة روس ورايتشل؟", 
        answer: "Emma Geller-Green",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي ثنائي يجتمع أخيرًا في المسلسل؟", 
        answer: "Rachel and Ross (يتصالحان في الحلقة النهائية)",
        answered: false 
      },
      { 
        value: 500, 
        question: "من يتزوج أولاً من بين الأصدقاء الستة؟", 
        answer: "Ross (من Carol قبل بدء المسلسل)",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي شخصية تُقبّل عن طريق الخطأ من قبل Joey وRachel؟", 
        answer: "Ross",
        answered: false 
      },
      { 
        value: 500, 
        question: "لماذا يقترح Joey الزواج على Phoebe في الموسم التاسع؟", 
        answer: "لأنه يظن خطأً أنها حامل",
        answered: false 
      },
      { 
        value: 500, 
        question: "من يتواعد رايتشل بعد انفصالها عن Ross في الموسم الثالث؟", 
        answer: "Mark",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما السبب الذي جعل Chandler ينفصل عن Janice في البداية في الموسم الأول؟", 
        answer: "She was too annoying",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي من الأصدقاء يتنازل عن شقته لمونيكا وتشاندلر؟", 
        answer: "Rachel",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي من أخوات Joey تظهر أيضاً في السلسلة الفرعية القصيرة Joey؟", 
        answer: "Gina Tribbiani",
        answered: false 
      },
      { 
        value: 500, 
        question: "ماذا تعطي والدة روس ومونيكا لـ Chandler بعد خطبته لمونيكا؟", 
        answer: "إرث عائلي (طبق فرن، وهو ما يكرهه Chandler)",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما الاسم الذي يستخدمه Joey كاسم مستعار؟", 
        answer: "Ken Adams",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما الاسم الذي كان Ross يريد في الأصل أن يسمي به طفلَه مع Carol؟", 
        answer: "Jordie",
        answered: false 
      },
      { 
        value: 500, 
        question: "من من الأصدقاء كان رفيق رايتشل في حفلة التخرج الثانوية في فلاش باك؟", 
        answer: "Ross (كان من المفترض أن يصطحبها بعد مغادرة Chip، لكنها لم تعلم أبداً)",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما هي آخر جملة منطوقة في المسلسل بأكمله؟", 
        answer: "Where?\" (قالها Chandler عندما سُئل إذا كان لديهم وقت لتناول قهوة قبل مغادرة الشقة)",
        answered: false 
      },
      { 
        value: 500, 
        question: "ما الأغنية التي يتجادل حولها Phoebe وLeslie؟", 
        answer: "Smelly Cat",
        answered: false 
      },
      { 
        value: 500, 
        question: "أي من الأصدقاء يفوز باليانصيب عندما يشترون تذكرة جماعية؟", 
        answer: "Nobody—they lose the ticket",
        answered: false 
      },
      { 
        value: 500, 
        question: "ماذا يفعل الأصدقاء في المشهد النهائي من المسلسل؟", 
        answer: "يتركون شقة Monica جميعاً ويتوجهون إلى Central Perk",
        answered: false 
      }
    ]
  },
  {
    id: 'series',
    name: 'مسلسلات',
    icon: '📺',
    questions: [
      { 
        value: 100, 
        question: "في مسلسل لعبة العروش، ما اسم الذئب العملاق لجون سنو؟", 
        answer: "الشبح",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل لعبة العروش، من يقتل تايوين لانيستر؟", 
        answer: "تيريون لانيستر",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل لعبة العروش، ما شعار بيت جرايجوي؟", 
        answer: "نحن لا نزرع",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل لعبة العروش، أي بيت يظهر شعاره على شكل شمس ورمح؟", 
        answer: "بيت مارتيل",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل لعبة العروش، من يُعرف بأنه \"الملك خلف الجدار\"؟", 
        answer: "مانس رايدر",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل لعبة العروش، ما اسم سيف آريا ستارك الذي أعطاها إياه جون سنو؟", 
        answer: "الإبرة",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل لعبة العروش، ما هو السم الذي يقتل جوفري براثيون؟", 
        answer: "الخانق",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل لعبة العروش، من كان أول شخصية تجلس على العرش الحديدي؟", 
        answer: "روبرت براثيون",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل لعبة العروش، ما اسم شقيق دانيريس تارغارين؟", 
        answer: "فيزيريس تارغارين",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل لعبة العروش، من الذي يقول العبارة الشهيرة \"الليل حالك ومملوء بالرعب\"؟", 
        answer: "ميليساندري",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل بريكينج باد، ما هو الاسم المستعار لوالتر وايت في تجارة المخدرات؟", 
        answer: "هايزنبرغ",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل بريكينج باد، ما اللون الذي تربطه سكايلا وايت بنفسها طوال المسلسل؟", 
        answer: "أزرق",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل بريكينج باد، ما اسم صديقة جيسي بينكمان التي تموت جرعة زائدة؟", 
        answer: "جين مارغوليس",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل بريكينج باد، ما اسم مطعم الوجبات السريعة الذي يملكه جوس فرينج؟", 
        answer: "لوس بولوس هيرمانوس",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل بريكينج باد، من يقتل هانك شرادر؟", 
        answer: "جاك ويلكر وعصابته",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل بريكينج باد، ما نوع السرطان الذي يُشخّص به والتر وايت؟", 
        answer: "سرطان الرئة",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل بريكينج باد، إلى ماذا يُشير عنوان الحلقة الأخيرة \"Felina\"؟", 
        answer: "أغنية لمارتي روبنز (\"El Paso\")",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل بريكينج باد، ما هو الاسم الحقيقي لسول غودمان؟", 
        answer: "جيمي ماكغيل",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل بريكينج باد، من يدير مغسلة السيارات التي يعمل بها والتر لأول مرة؟", 
        answer: "بوغدان وولينيتز",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل بريكينج باد، ما المادة التي يستخدمها والتر لإذابة الجثث؟", 
        answer: "حمض الهيدروفلوريك",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل The Simpsons، ما اسم النادل في حانة موي؟", 
        answer: "Moe Szyslak",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل The Simpsons، ما اسم رئيس هومر في محطة الطاقة النووية؟", 
        answer: "Mr. Burns",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل The Simpsons، ما اسم عازف الساكسفون المفضل لدى ليزا؟", 
        answer: "Bleeding Gums Murphy",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل The Simpsons، ما اسم المهرج الذي يقدم برنامجاً تلفزيونياً للأطفال؟", 
        answer: "Krusty the Clown",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل The Simpsons، ما اسم زوجة نيد فلاندرز؟", 
        answer: "Maude Flanders",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل The Simpsons، ما اسم عائلة مارج قبل الزواج؟", 
        answer: "Bouvier",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل The Simpsons، ما اسم الشركة الشريرة التي يملكها السيد بيرنز؟", 
        answer: "Springfield Nuclear Power Plant",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل The Simpsons، ما الاسم الكامل للمدير سكِنِر؟", 
        answer: "Seymour Skinner",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل The Wire، في أي مدينة تدور أحداث العرض؟", 
        answer: "Baltimore, Maryland",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل The Wire، ما اسم المحقق الذي يؤدي دوره دومينيك ويست؟", 
        answer: "Jimmy McNulty",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل The Wire، ما اسم منظمة المخدرات التي يقودها أفون باركسديل؟", 
        answer: "The Barksdale Organization",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل The Wire، ما السلاح المميز لعمر ليتل؟", 
        answer: "بندقية",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل The Wire، إلى ماذا تشير عبارة \"The Game\"؟", 
        answer: "تجارة المخدرات في بالتيمور",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل The Wire، ما اسم الصحيفة التي تظهر في الموسم الأخير؟", 
        answer: "The Baltimore Sun",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل The Wire، ما اسم المشروع التجاري المشروع الشرعي الذي يديره سترينغر بيل؟", 
        answer: "Baltimore Builders",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل The Wire، ما اسم وحدة الشرطة التي تحقق في قضايا المخدرات؟", 
        answer: "The Major Crimes Unit",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل The Wire، ما الاسم الحقيقي للشخصية \"Bubbles\"؟", 
        answer: "Reginald Cousins",
        answered: false 
      },
      { 
        value: 100, 
        question: "في مسلسل The Wire، ما اسم السياسي الفاسد؟", 
        answer: "Clay Davis",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل ستراينجر ثينجز، ما اسم البعد البديل؟", 
        answer: "العالم المقلوب",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل ستراينجر ثينجز، ما هو الاسم الحقيقي لإليفن؟", 
        answer: "جين إيفز (لاحقاً جين هوبر)",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل ستراينجر ثينجز، من هو قائد مجموعة Dungeons & Dragons، نادي الجحيم الناري؟", 
        answer: "إيدي مونسن",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل ستراينجر ثينجز، ما اسم المدينة التي تدور فيها أحداث المسلسل؟", 
        answer: "هوكينز، إنديانا",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل ستراينجر ثينجز، ما الأغنية التي تنقذ ماكس من لعنة فيكنا في الموسم الرابع؟", 
        answer: "Running Up That Hill\" لKate Bush",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل ستراينجر ثينجز، من هو الأخ الأكبر لويل بايرز؟", 
        answer: "جوناثان بايرز",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل ستراينجر ثينجز، ماذا يستخدم ستيف هارينجتون لمقاومة الديموغورغون؟", 
        answer: "مضرب بيسبول مع مسامير",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل ستراينجر ثينجز، أي شركة مسؤولة عن التجارب على إليفن؟", 
        answer: "مختبر هوكينز الوطني",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل ستراينجر ثينجز، من يتبنى إليفن؟", 
        answer: "جيم هوبر",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل ستراينجر ثينجز، ما اسم حيوان Dustin الأليف (الديموغورغون) في الموسم الثاني؟", 
        answer: "D’Artagnan (Dart)",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل The Walking Dead، ما مهنة ريك جرايمز قبل نهاية العالم؟", 
        answer: "نائب الشريف",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل The Walking Dead، من يقتل الحاكم؟", 
        answer: "ليلي تشامبلر",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل The Walking Dead، ما السلاح المفضل لنيغان؟", 
        answer: "مضرب بيسبول مسمّر يُدعى لوسيل",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل The Walking Dead، ماذا يستخدم داريل ديكسون كسلاحه المميز؟", 
        answer: "قوس مركب",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل The Walking Dead، ما العبارة المكتوبة على أبواب المستشفى حيث يستيقظ ريك؟", 
        answer: "لا تفتح، ميت بالداخل",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل The Walking Dead، من هو قائد مستعمرة هيلتوب؟", 
        answer: "غريغوري (ثم ماجي لاحقاً)",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل The Walking Dead، ما أسماء ابنتي كارول؟", 
        answer: "صوفيا وليزي",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل The Walking Dead، من هو أول من قدم مفهوم \"الهمسات\"؟", 
        answer: "جيسوس",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل The Walking Dead، ما اسم النمر الأليف للمملكة؟", 
        answer: "شيفا",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل The Walking Dead، من كانت أول شخصية رئيسية تموت في العرض؟", 
        answer: "إيمي (أخت أندريا)",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل Seinfeld، ما الاسم الأول لكريمر؟", 
        answer: "Cosmo",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل Seinfeld، ما هي وسيلة منع الحمل المفضلة لإيلين التي تم إلغاؤها؟", 
        answer: "The Sponge",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل Seinfeld، ماذا يدعي جورج أنه يعمل كمهنة زائفة؟", 
        answer: "مهندس معماري",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل Seinfeld، ما العيد الذي اخترعه فرانك كوستانزا؟", 
        answer: "Festivus",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل Seinfeld، ما هو عمل جيري؟", 
        answer: "كوميدي ستاند أب",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل Seinfeld، ما اسم خطيبة جورج التي تموت؟", 
        answer: "Susan Ross",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل Seinfeld، ما اسم حبيب إيلين المتقطع؟", 
        answer: "David Puddy",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل Seinfeld، ما اسم جار جيري المزعج؟", 
        answer: "Newman",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل Seinfeld، ما اسم المقهى الذي يجتمع فيه الأصدقاء؟", 
        answer: "Monk’s Café",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل Chernobyl، في أي سنة وقع الكارثة النووية؟", 
        answer: "1986",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل Chernobyl، أي مدينة تأثرت أكثر بالانفجار؟", 
        answer: "Pripyat",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل Chernobyl، ما اسم مدير المفاعل؟", 
        answer: "Viktor Bryukhanov",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل Chernobyl، ما اللون الذي جعل الإشعاع قلب نواة المفاعل متوهجة؟", 
        answer: "أزرق",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل Chernobyl، ما المادة التي أسقطت على المفاعل لاحتواء الحريق؟", 
        answer: "الرمل والبورون",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل Chernobyl، من هو العالم السوفييتي الذي ساعد في التحقيق بالكارثة؟", 
        answer: "Valery Legasov",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل Chernobyl، ما التقدير للتعرض للإشعاع بالنسبة لعمال الإطفاء؟", 
        answer: "جرعة قاتلة (تعرض الكثير لجرعات مميتة)",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل Chernobyl، ماذا حدث لرجال الإطفاء الذين استجابوا أولاً؟", 
        answer: "أصيبوا بتسمم إشعاعي شديد وماتوا",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل Chernobyl، ما السبب الرسمي للانفجار حسب السلطات السوفييتية؟", 
        answer: "خطأ مشغل",
        answered: false 
      },
      { 
        value: 200, 
        question: "في مسلسل Chernobyl، كم كان من المفترض أن يستمر حظر المنطقة في البداية؟", 
        answer: "كان من المفترض أن يكون مؤقتاً لكنه ما زال سارياً حتى اليوم",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Sopranos، ما اسم طبيبة نفسية توني سوبرانو؟", 
        answer: "الدكتورة جينيفر ميلفي",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Sopranos، من يقتل كريستوفر مولتسانتي؟", 
        answer: "توني سوبرانو",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Sopranos، ما اسم قارب توني؟", 
        answer: "ذا ستوجتس",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Sopranos، ما الحالة النفسية التي يعاني منها توني؟", 
        answer: "نوبات هلع",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Sopranos، ما مصير أدريانا لا كيرفا؟", 
        answer: "سيلفيو يقتلها لكونها عميلة FBI",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Sopranos، ماذا يطعم توني البط دائماً في فناء منزله؟", 
        answer: "الخبز",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Sopranos، ما اسم عم توني الذي يحاول قتله؟", 
        answer: "جونيور سوبرانو (كورادو سوبرانو جونيور)",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Sopranos، من هي زوجة توني؟", 
        answer: "كارميلا سوبرانو",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Sopranos، كيف ينتهي العرض؟", 
        answer: "بانتهاء مفاجئ مع شاشة سوداء بينما تُشغل أغنية \"Don’t Stop Believin’",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Big Bang Theory، ما هو الرقم المفضل لشيلدون كوبر؟", 
        answer: "73",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Big Bang Theory، ما اسم بطل التلفزيون الذي كان معشوق شيلدون في طفولته؟", 
        answer: "البروفيسور بروتون",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Big Bang Theory، من تتزوج هوارد وولوفيتز؟", 
        answer: "بيرناديت روستينكوفسكي",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Big Bang Theory، ما اسم كلب راج؟", 
        answer: "سينامون",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Big Bang Theory، أين يعمل الشخصيات؟", 
        answer: "كالتيك (معهد كاليفورنيا للتكنولوجيا)",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Big Bang Theory، ما هو اسم عائلة بيني قبل زواجها من ليونارد؟", 
        answer: "لم يُكشف عنه أبداً",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Big Bang Theory، ماذا يسمّي شيلدون مكانه المفضل على الأريكة؟", 
        answer: "مكاني",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Big Bang Theory، ما هو مجال دراسة آيمي فاراه فاولر؟", 
        answer: "علوم الأعصاب",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Big Bang Theory، ما اسم صاحب متجر القصص المصورة؟", 
        answer: "ستيوارت بلوم",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Big Bang Theory، ما العبارة الشهيرة لشيلدون؟", 
        answer: "بازينجا!",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Mandalorian، ما الاسم الحقيقي لـ \"بيبي يودا\"؟", 
        answer: "Grogu",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Mandalorian، ما الاسم الحقيقي للمندالوري؟", 
        answer: "Din Djarin",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Mandalorian، ما المعدن المستخدم في صناعة دروع المندالوري؟", 
        answer: "Beskar",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Mandalorian، ما اسم الشرير الذي يؤدي دوره جيانكارلو إسبوزيتو؟", 
        answer: "Moff Gideon",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Mandalorian، من هو الجيداي الذي يأخذ Grogu في الموسم الثاني؟", 
        answer: "Luke Skywalker",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Mandalorian، ما اسم الكوكب الذي يجد فيه ماندو Grogu لأول مرة؟", 
        answer: "Arvala-7",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Mandalorian، ما اسم زعيم عصابة الصيادين على الجوائز؟", 
        answer: "Greef Karga",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Mandalorian، ما اسم السيف الضوئي الأسود الذي يحمله موف جيديون؟", 
        answer: "The Darksaber",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Mandalorian، ما اسم الجندي السابق الذي يساعد ماندو؟", 
        answer: "Cara Dune",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل The Mandalorian، ما اسم المجموعة السرية التي يقودها الدروع؟", 
        answer: "The Children of the Watch",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل House of Cards، ما اسم شخصية كيفن سبيسي؟", 
        answer: "Frank Underwood",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل House of Cards، ما اسم زوجة فرانك؟", 
        answer: "Claire Underwood",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل House of Cards، ما المنصب الذي كان يشغله فرانك قبل أن يصبح رئيساً؟", 
        answer: "نائب الرئيس",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل House of Cards، ما الولاية التي يمثلها فرانك في الكونغرس؟", 
        answer: "South Carolina",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل House of Cards، من هو الرجل المخلص المرافق لفرانك؟", 
        answer: "Doug Stamper",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل House of Cards، ما اسم الصحيفة التي تعمل لديها زوي بارنز؟", 
        answer: "The Washington Herald",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل House of Cards، كيف يقتل فرانك أندروود زوي بارنز؟", 
        answer: "يدفعها أمام قطار",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل House of Cards، ماذا يكسر فرانك بشكل متكرر أثناء تحدثه؟", 
        answer: "الجدار الرابع",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل House of Cards، من يحل محل فرانك كرئيس؟", 
        answer: "Claire Underwood",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل House of Cards، ما اسم الخصم السياسي الرئيسي لفرانك؟", 
        answer: "Heather Dunbar",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل How I Met Your Mother، ما اسم حركة \"Playbook\" المميزة لبارني؟", 
        answer: "The Lorenzo Von Matterhorn",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل How I Met Your Mother، ما مهنة تيد؟", 
        answer: "مهندس معماري",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل How I Met Your Mother، ما اسم الحانة التي يتجمع فيها الأصدقاء؟", 
        answer: "MacLaren’s Pub",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل How I Met Your Mother، بمن يتزوج تيد في النهاية؟", 
        answer: "Tracy McConnell (الأم)",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل How I Met Your Mother، ما الآلة التي يسرقها تيد من أجل روبين؟", 
        answer: "البوق الفرنسي الأزرق",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل Vikings، من هي الزوجة الأولى لراجنار لوثبروك؟", 
        answer: "Lagertha",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل Vikings، ما اسم شقيق راجنار؟", 
        answer: "Rollo",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل Vikings، أي مدينة شهيرة يهاجمها راجنار في الموسم الثالث؟", 
        answer: "باريس",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل Vikings، ما اسم ابن راجنار الذي يصبح ملكاً؟", 
        answer: "Bjorn Ironside",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل Vikings، أي إله يعتقد فلوكي أنه مرتبط به؟", 
        answer: "Loki",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل Euphoria، ما اسم المدرسة الثانوية التي يلتحق بها رو وآخرون؟", 
        answer: "East Highland High",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل Euphoria، بأي مادة يتعاطى رو؟", 
        answer: "الأفيون",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل Euphoria، من هو أول معشوق لجولز على الشاشة؟", 
        answer: "Tyler/Nate (خدعة catfish)",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل Euphoria، ماذا يعمل فيزكو؟", 
        answer: "تاجر مخدرات",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل Euphoria، ما اسم المسرحية التي يقدمها ليكسي؟", 
        answer: "Our Life",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل Downton Abbey، ما اسم عقار عائلة كرولي؟", 
        answer: "Downton Abbey",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل Downton Abbey، بمن تتزوج ليدي ماري كرولي في البداية؟", 
        answer: "Matthew Crawley",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل Downton Abbey، ما اسم الخادم الرئيسي لعائلة كرولي؟", 
        answer: "Carson",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل Downton Abbey، ما المأساة التي تقع في نهاية الموسم الثالث؟", 
        answer: "وفاة ماثيو كرولي في حادث سيارة",
        answered: false 
      },
      { 
        value: 300, 
        question: "في مسلسل Downton Abbey، أي فرد من العائلة يصبح ممرضة خلال الحرب العالمية الأولى؟", 
        answer: "ليدي سيبل كرولي",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Sherlock، ما اسم صاحبة منزل شيرلوك هولمز؟", 
        answer: "السيدة هدسون",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Sherlock، من يجسد دور شيرلوك هولمز في سلسلة BBC؟", 
        answer: "بندكت كامبرباتش",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Sherlock، ما هو عنوان منزل شيرلوك؟", 
        answer: "221B شارع بيكر",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Sherlock، ماذا تساعد تقنية \"قصر العقل\" الخاصة بشيرلوك على فعله؟", 
        answer: "تخزين واسترجاع المعلومات التفصيلية",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Sherlock، من هو أكبر عدو لشيرلوك؟", 
        answer: "جيم مورياتي",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Sherlock، ما الآلة الموسيقية التي يعزف عليها شيرلوك؟", 
        answer: "الكمان",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Sherlock، ما اسم زوجة جون واتسون؟", 
        answer: "ماري مورستان",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Sherlock، ما عنوان الحلقة الأولى؟", 
        answer: "دراسة باللون الوردي",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Sherlock، ماذا يكتب شيرلوك على الجدار باستخدام رذاذ الطلاء في الموسم الثاني؟", 
        answer: "I O U",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Sherlock، ما المخدر الذي يدمن عليه شيرلوك؟", 
        answer: "الهيروين (على الرغم من أن المسلسل يشير أيضاً إلى استخدام الكوكايين)",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل The Office (النسخة الأمريكية)، ما اسم فيلم مايكل سكوت؟", 
        answer: "Threat Level Midnight",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل The Office (النسخة الأمريكية)، ما اسم ابنة جيم وبام؟", 
        answer: "سيسيليا \"سيسي\" هالبرت",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل The Office (النسخة الأمريكية)، من يشعل النار في المكتب؟", 
        answer: "ريان هوارد",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل The Office (النسخة الأمريكية)، ما اسم ابن عم دوايت؟", 
        answer: "موس شروت",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل The Office (النسخة الأمريكية)، في أي مدينة تدور أحداث المسلسل؟", 
        answer: "سكرانتون، بنسلفانيا",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل The Office (النسخة الأمريكية)، من هي موظفة الاستقبال قبل بام؟", 
        answer: "إيرين هانون (بعد بام؛ وقد شغلت ميريديث المنصب مؤقتاً أيضاً)",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل The Office (النسخة الأمريكية)، ما هو الاسم الحقيقي لكريد؟", 
        answer: "كريد براتون (نفس اسم الممثل)",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل The Office (النسخة الأمريكية)، من يواعد مايكل سكوت قبل هولي فلكس؟", 
        answer: "جان ليفينسون",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل The Office (النسخة الأمريكية)، ما هو الطعام المفضل لكيفن مالون؟", 
        answer: "تشيلي",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل The Office (النسخة الأمريكية)، أي شركة تشتري شركة Dunder Mifflin؟", 
        answer: "سابر",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Narcos، من يلعب دور بابلو إسكوبار؟", 
        answer: "Wagner Moura",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Narcos، لأي وكالة يعمل ستيف ميرفي؟", 
        answer: "DEA (إدارة مكافحة المخدرات)",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Narcos، ما اسم كارتل إسكوبار؟", 
        answer: "Medellín Cartel",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Narcos، في أي دولة تدور أحداث المسلسل بشكل أساسي؟", 
        answer: "كولومبيا",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Narcos، من هو أقرب منفذ لإسكوبار؟", 
        answer: "Gustavo Gaviria",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Narcos، ما اللقب الذي يُطلق على إسكوبار؟", 
        answer: "El Patrón",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Narcos، ما اسم زعيم كارتل كالي المنافس؟", 
        answer: "Gilberto Rodríguez Orejuela",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Narcos، ما العبارة الشهيرة المرتبطة برشاوى إسكوبار؟", 
        answer: "Plata o plomo (\"فضة أو رصاص\")",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Narcos، من يقتل بابلو إسكوبار؟", 
        answer: "الشرطة الوطنية الكولومبية",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Narcos، ما اسم زوجة إسكوبار؟", 
        answer: "Tata Escobar",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Mad Men، ما الاسم الحقيقي لدون درابر؟", 
        answer: "Dick Whitman",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Mad Men، ما اسم وكالة الإعلان التي يعمل بها دون؟", 
        answer: "Sterling Cooper",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Mad Men، ما الوظيفة الأصلية لبِجي أولسون في الوكالة؟", 
        answer: "سكرتيرة",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Mad Men، ما العادة التي تظهر بشكل متكرر في المسلسل؟", 
        answer: "تدخين السجائر",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Mad Men، لأي منتج يروج دون الشعار الشهير \"It’s toasted\"؟", 
        answer: "سجائر Lucky Strike",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Money Heist، من هو العقل المدبر وراء عمليات السرقة؟", 
        answer: "The Professor",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Money Heist، ما الاسم الذي تتخذه البطلة الرئيسية؟", 
        answer: "Tokyo",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Money Heist، ما لون بدلات السراقة التي يرتديها اللصوص؟", 
        answer: "أحمر",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Money Heist، ما النشيد الذي يغنيه اللصوص؟", 
        answer: "Bella Ciao",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Money Heist، ما اسم البنك الذي يستهدفونه في السرقة الثانية؟", 
        answer: "The Bank of Spain",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Succession، ما اسم إمبراطورية الإعلام التي تملكها عائلة روي؟", 
        answer: "Waystar Royco",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Succession، من هو أكبر إخوة روي؟", 
        answer: "Connor Roy",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Succession، ما اسم الزوجة الثالثة للوالد لوجان روي؟", 
        answer: "Marcia Roy",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Succession، ما هو أكبر فضيحة يتعرض لها كيندال روي في الموسم الأول؟", 
        answer: "تسبب حادث وفاة نادل عن طريق الخطأ",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Westworld، ما اسم المنتزه الترفيهي؟", 
        answer: "Westworld",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Westworld، ما اسم الكائنات الاصطناعية في المنتزه؟", 
        answer: "Hosts",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Westworld، من هو الخصم الرئيسي في الموسم الأول؟", 
        answer: "الدكتور روبرت فورد",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Westworld، ما الاسم الحقيقي لشخصية \"الرجل بالأسود\"؟", 
        answer: "William",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل True Detective، من هما المحققان الرئيسيان في الموسم الأول؟", 
        answer: "Rust Cohle وMarty Hart",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل True Detective، في أي ولاية تدور أحداث الموسم الأول؟", 
        answer: "لويزيانا",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل True Detective، ما اسم الطائفة التي يحققون بشأنها في الموسم الأول؟", 
        answer: "طائفة الملك الأصفر",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل True Detective، من يجسد دور المحقق الرئيسي في الموسم الثالث؟", 
        answer: "Mahershala Ali",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل House, M.D.، ما الاسم الكامل للدكتور هاوس؟", 
        answer: "Gregory House",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل House, M.D.، ما اسم أفضل صديق لهاوس؟", 
        answer: "الدكتور جيمس ويلسون",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل House, M.D.، ما الإدمان الذي يعاني منه هاوس؟", 
        answer: "فيكودين",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل House, M.D.، ما اسم المستشفى الذي يعمل به هاوس؟", 
        answer: "Princeton-Plainsboro Teaching Hospital",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل House, M.D.، ما تخصص هاوس؟", 
        answer: "التشخيص الطبي",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Glee، ما اسم المدرسة الثانوية؟", 
        answer: "William McKinley High School",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Glee، ما اسم نادي الغناء؟", 
        answer: "New Directions",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Glee، من هي مدربة المشجعين الرئيسية؟", 
        answer: "Sue Sylvester",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Glee، ما الأغنية التي تغنيها رايتشل بيري في أول سولو لها؟", 
        answer: "On My Own\" من Les Misérables",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Glee، ما الآلة التي يعزف عليها براد، العازف الصامت؟", 
        answer: "البيانو",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Parks and Recreation، ما اسم الحصان الصغير الذي يصبح نجمًا محليًا؟", 
        answer: "Li'l Sebastian",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Parks and Recreation، ما العمل الذي يبدأه توم هافرفورد مع جان-رالفيو؟", 
        answer: "Entertainment 720",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Parks and Recreation، ما نوع الطعام المفضل لرون سوانسون؟", 
        answer: "طعام الإفطار (وخاصةً اللحم المقدد والبيض)",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Parks and Recreation، ما اسم الكتاب الذي تكتبه ليزلي كنوب عن باوني؟", 
        answer: "Pawnee: The Greatest Town in America",
        answered: false 
      },
      { 
        value: 400, 
        question: "في مسلسل Parks and Recreation، ما الوظيفة التي يشغلها إبريل لودجيت في بداية المسلسل؟", 
        answer: "متدربة في قسم الحدائق",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Grey’s Anatomy، من هو مبتكر المسلسل؟", 
        answer: "شوندا رايمز",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Grey’s Anatomy، ما اسم أفضل صديقة لميريديث؟", 
        answer: "كريستينا يانغ",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Grey’s Anatomy، في أي مستشفى تدور أحداث المسلسل؟", 
        answer: "مستشفى سياتل جريس (لاحقاً أصبح Grey Sloan Memorial)",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Grey’s Anatomy، من يتبنى زولا في الأصل؟", 
        answer: "ميريديث وديريك شيبرد",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Grey’s Anatomy، ما الكارثة الكبرى التي تحدث في الموسم الثامن؟", 
        answer: "تحطم طائرة",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Grey’s Anatomy، ما الأغنية التي تُشغل خلال مشهد وفاة ديريك؟", 
        answer: "Chasing Cars\" لفرقة Snow Patrol",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Grey’s Anatomy، إلى ماذا يُشير لقب \"McDreamy\"؟", 
        answer: "ديريك شيبرد",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Grey’s Anatomy، بمن كانت متزوجة إزي ستيفنز؟", 
        answer: "أليكس كاريف",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Grey’s Anatomy، ما التخصص الذي تمارسه أريزونا روبينز؟", 
        answer: "جراحة الأطفال",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Grey’s Anatomy، ما اللقب الذي تُطلقه كريستينا على ميريديث؟", 
        answer: "Twisted Sister",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Crown، من يجسد دور الملكة إليزابيث الثانية في الموسمين الأولين؟", 
        answer: "كلير فويا",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Crown، ما اسم والد الملكة إليزابيث؟", 
        answer: "الملك جورج السادس",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Crown، من يجسد دور الأميرة ديانا في المواسم اللاحقة؟", 
        answer: "إيما كورين (الشابة)، إليزابيث ديبيكي (الأكبر سناً)",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Crown، ما الحدث الذي يركز عليه حلقة الموسم الثالث \"Aberfan\"؟", 
        answer: "كارثة أبيرفان (حادث تعدين في ويلز)",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Crown، بمن يتزوج الأمير تشارلز أولاً؟", 
        answer: "السيدة ديانا سبنسر",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Crown، ما اسم زوج الملكة إليزابيث؟", 
        answer: "الأمير فيليب",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Crown، ما الفضيحة التي أدت إلى استقالة رئيس الوزراء هارولد ماكميلان؟", 
        answer: "فضيحة بروفومو",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Crown، أي من أطفال الملكة إليزابيث كان معروفاً بسلوكه المتطرف؟", 
        answer: "الأمير أندرو",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Crown، من يجسد دور مارجريت تاتشر؟", 
        answer: "جيليان أندرسون",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Crown، ما اسم أخت الملكة؟", 
        answer: "الأميرة مارجريت",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Lost، ما اسم شركة الطيران التي تتحطم على الجزيرة؟", 
        answer: "Oceanic Airlines",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Lost، ما اسم المجموعة الغامضة التي تعيش على الجزيرة؟", 
        answer: "The Others",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Lost، ما اسم الزر الذي يجب الضغط عليه كل 108 دقيقة؟", 
        answer: "زر محطة البجعة",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Lost، إلى ماذا ترتبط سلسلة الأرقام 4، 8، 15، 16، 23، 42؟", 
        answer: "بالأرقام الغامضة للجزيرة (مبادرة DHARMA)",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Lost، ما اسم السفينة المحطمة التي وُجدت على الجزيرة؟", 
        answer: "The Black Rock",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Lost، ما اسم الفيزيائي الذي يساعد الناجين؟", 
        answer: "Daniel Faraday",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Lost، من يُكشف أنه وحش الدخان؟", 
        answer: "الرجل الأسود",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Lost، من يبني الطوف للهروب من الجزيرة؟", 
        answer: "Michael Dawson",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Lost، ما اسم الرجل الأسكتلندي المحاصر في المهرب؟", 
        answer: "Desmond Hume",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Lost، ما اسم والد جاك شيبارد؟", 
        answer: "Christian Shephard",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Twilight Zone، من أنشأ المسلسل؟", 
        answer: "Rod Serling",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Twilight Zone، ماذا يحدث لهينري بيميس في حلقة \"Time Enough at Last\"؟", 
        answer: "يكسر نظارته بعد نهاية العالم",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Twilight Zone، ما هو التحول في حلقة \"The Monsters Are Due on Maple Street\"؟", 
        answer: "الجيران ينقلبون على بعضهم بسبب البارانويا",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Twilight Zone، ماذا يحدث لرائد الفضاء في حلقة \"Where Is Everybody؟", 
        answer: "؟ يتوهّم خلال اختبار حرمان الحواس",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Twilight Zone، ماذا يجد الشخصية الرئيسية في حلقة \"The Invaders\"؟", 
        answer: "كائنات فضائية صغيرة تهاجم منزلها",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Peaky Blinders، من هو زعيم العصابة؟", 
        answer: "Tommy Shelby",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Peaky Blinders، ما اسم عمة تومي؟", 
        answer: "Polly Gray",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Peaky Blinders، في أي مدينة تدور أحداث المسلسل؟", 
        answer: "برمنغهام، إنجلترا",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Peaky Blinders، ما اسم حصان سباق تومي شيليبي؟", 
        answer: "Grace’s Secret",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Peaky Blinders، أي عائلة هي الخصم الرئيسي للعصابة؟", 
        answer: "عائلة Sabini",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Peaky Blinders، من هو المفتش الرئيسي الذي يطارد تومي شيليبي؟", 
        answer: "Chester Campbell",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Peaky Blinders، بماذا يعاني آرثر شيليبي طوال المسلسل؟", 
        answer: "الإدمان على الكحول واضطراب ما بعد الصدمة",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Peaky Blinders، ما اسم شقيق تومي الذي يترك العصابة؟", 
        answer: "John Shelby",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Peaky Blinders، ما اسم حبيبة تومي وزوجته؟", 
        answer: "Grace Burgess",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Peaky Blinders، بأي حركة سياسية ينخرط تومي؟", 
        answer: "الحزب العمالي البريطاني",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Witcher، ما اسم حصان جيرالت؟", 
        answer: "Roach",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Witcher، ما اسم القانون السحري الذي يربط جيرالت بسيري؟", 
        answer: "قانون المفاجأة",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Witcher، ما الهدف الأساسي الذي تسعى إليه يينيفر طوال السلسلة؟", 
        answer: "استعادة قدرتها على إنجاب الأطفال",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Witcher، بأي مخلوق يواجه جيرالت في الحلقة الأولى؟", 
        answer: "كيكيمورا",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Witcher، ما اسم البرد الذي يتبع جيرالت؟", 
        answer: "Jaskier (المعروف باسم Dandelion في الكتب والألعاب)",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Boys، ما اسم الشركة التي تدير الأبطال الخارقين؟", 
        answer: "Vought International",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Boys، ما اسم الدواء الذي يمنح الأشخاص قوى خارقة مؤقتاً؟", 
        answer: "Compound V",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Boys، ما اسم زوجة بيلي بوتر المتوفاة؟", 
        answer: "Becca Butcher",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Boys، أي بطل خارق هو محاكاة مباشرة لسوبرمان؟", 
        answer: "Homelander",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Boys، ما اسم عضو السرعة في فرقة The Seven؟", 
        answer: "A-Train",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Lucifer، ما اسم نادي الليل الذي يمتلكه لوسيفر؟", 
        answer: "Lux",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Lucifer، ما القدرة التي يمتلكها لوسيفر أثناء استجوابه للناس؟", 
        answer: "يُجبرهم على الكشف عن أعمق رغباتهم",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Lucifer، ما اسم ضابط شرطة LAPD الذي يتعاون معه؟", 
        answer: "Chloe Decker",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Lucifer، ما اسم حليفة الشيطان، Maze؟", 
        answer: "Mazikeen",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Lucifer، ما اسم شقيق لوسيفر الذي هو ملاك؟", 
        answer: "Amenadiel",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Black Mirror، ما اسم الحلقة التي يُجبر فيها سياسي على الأداء أمام الكاميرات مباشرة؟", 
        answer: "The National Anthem",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Black Mirror، أي حلقة تُظهِر نظام تقييم اجتماعي حيث يقيم الناس بعضهم البعض؟", 
        answer: "Nosedive",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Black Mirror، ما اسم الحلقة التي يُManipulate فيها الجنود لرؤية الأعداء كمخلوقات؟", 
        answer: "Men Against Fire",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Black Mirror، ما التكنولوجيا التي تتيح للناس إعادة مشاهدة ذكرياتهم؟", 
        answer: "الحبة\" في \"The Entire History of You",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Black Mirror، أي حلقة تدور أحداثها في حياة بعد الموت المحاكاة؟", 
        answer: "San Junipero",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Ozark، ما اسم العائلة التي تدور حولها أحداث المسلسل؟", 
        answer: "The Byrdes",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Ozark، ما النشاط غير القانوني الذي يشارك فيه مارتي بيرد؟", 
        answer: "غسيل الأموال",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Ozark، ما اسم الكارتل الخطير الذي يعمل معه مارتي؟", 
        answer: "The Navarro Cartel",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Ozark، ما العمل الذي تستخدمه عائلة بيرد لغسيل الأموال؟", 
        answer: "Blue Cat Lodge (في البداية)",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Ozark، ما اسم ابن عم روث لانجمور الذي ينخرط في الجريمة؟", 
        answer: "Wyatt Langmore",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Fargo، في أي ولاية أمريكية تقع أحداث المسلسل بشكل رئيسي؟", 
        answer: "مينيسوتا",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Fargo، ما اسم الثنائي القاتل في الموسم الأول؟", 
        answer: "Mr. Wrench وMr. Numbers",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Fargo، من هو الخصم الرئيسي في الموسم الأول الذي يلعب دوره بيلي بوب ثورنتون؟", 
        answer: "Lorne Malvo",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Fargo، ما اسم الشرطي الذي يحقق في الجرائم في الموسم الثاني؟", 
        answer: "Lou Solverson",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Fargo، أي عائلة إجرامية منظمة تظهر في عدة مواسم؟", 
        answer: "عائلة Gerhardt",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Handmaid's Tale، ما اسم النظام الشمولي الذي يسيطر على الولايات المتحدة؟", 
        answer: "Gilead",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Handmaid's Tale، ما الاسم الحقيقي لـ Offred؟", 
        answer: "June Osborne",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Handmaid's Tale، ما الغرض من وجود الخادمات في Gilead؟", 
        answer: "إنجاب الأطفال للطبقة الحاكمة",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Handmaid's Tale، من هو القائد الذي يملك Offred في البداية؟", 
        answer: "القائد فريد وتراتفورد",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل The Handmaid's Tale، ما اسم جماعة المقاومة السرية؟", 
        answer: "Mayday",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Better Call Saul، ما اسم المحامي الرئيسي؟", 
        answer: "Jimmy McGill",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Better Call Saul، ما الاسم الذي يستخدمه المحامي عندما يقوم بخداع الناس؟", 
        answer: "Saul Goodman",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Better Call Saul، في أي مدينة ينشط المحامي؟", 
        answer: "Albuquerque",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Better Call Saul، من هو الأخ الأكبر لجيمي؟", 
        answer: "Chuck McGill",
        answered: false 
      },
      { 
        value: 500, 
        question: "في مسلسل Better Call Saul، ما هو التخصص القانوني الذي يتبعه المحامي؟", 
        answer: "القانون الجنائي",
        answered: false 
      }
    ]
  }
];




export const getInitialCategories = (): Category[] => {
  try {
    // Try to get categories from localStorage first
    const savedCategories = localStorage.getItem('trivia-game-categories');
    if (savedCategories) {
      return JSON.parse(savedCategories);
    }
  } catch (error) {
    console.error('Error loading categories from localStorage:', error);
  }
  
  // Fall back to default categories if localStorage is empty or fails
  return categories;
};

export const resetToDefaultCategories = (): Category[] => {
  // This function always returns the original hardcoded categories,
  // completely bypassing localStorage
  return [...categories]; // Return a fresh copy of the defaults
};