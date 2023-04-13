import React , {useState ,useEffect} from "react";
import Header from "../component/header";
import Sidebar from "../component/sidebar";

const About = (props)=>{
    const [showSideBar, setShowSideBar] = useState(false);
const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
useEffect(() => {
    if (showSideBar) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  }, [showSideBar]);
    return(
        <>
        <Header handleSideBar={handleSideBar} >
        <div className="flex justify-center  aligin-center">
         <h1 className="text-white">About</h1>
          </div>
        </Header>
        <div className="flex">
          <Sidebar showSide={showSideBar} />
          <div className={`w-full `}>
            <div className="about w-full p-2">
  <div className="container-fluid">
    <ul className="ul1">
      <li className="right li">تيكمي TakeMe</li>
      <ul className="ul2">
        <li className="bg-color li">
          مشروع تيكمي تم تطويره من طاقم مختص من قرية الغجر لخدمتكم وتسهيل الحصول
          على احتياجاتكم. نعمل على تسهيل التواصل بين الناس لشراء وايجار كل شيء
          اونلاين.
        </li>
      </ul>
    </ul>
  </div>
  <div className="container-fluid">
    <ul className="ul1">
      <li className="right li">كيف بتصير شريك بتيكمي TakeMe?</li>
      <ul className="ul2">
        <li className="bg-color li">
          كل حدا بيملك اي شي حابب يأجره او يبيعه بيقدر يشاركنا وينشره بتيكمي بكل
          سهولة وبنفس الوقت بيقدر يشوف شو في منتجات بالتطبيق اذا حابب يشتريها او
          يستأجرها.
        </li>
        <li className="bg-color li">
          وكمان بتقدر تعرض مهنتك يعني مو شرط تنشر بس منتجات، بتقدر كمان تنشر
          مهنتك وشغلك حتى اي حدا معني يطلبك ويتواصل معك.
        </li>
        <li className="bg-color li">
          باختصار تيكمي هي BIG اونلاين لعرض منتجاتك وخدماتك.
        </li>
      </ul>
    </ul>
  </div>
  <div className="container-fluid">
    <ul className="ul1">
      <li className="right li">كيف بتفيدك تيكمي TakeMe?</li>
      <ul className="ul2">
        <li className="bg-color li">
          بالنسبة الك كبائع هي متجرك الاونلاين اللي ممكن من خلاله تبيع وتأجر كل
          شيء عندك ويكون مصدر دخل وربح الك.
        </li>
        <li className="bg-color li">
          اما بالنسبة الك كمستخدم فهي مخزنك الاونلاين اللامحدود يعني اذا احتجت
          منتج معين بدلًا من شراؤه وتخزينه ببيتك بتقدر تستأجره عن طريق تيكمي
          للمدة اللي بتحتاجها وهيك بتكون حصلت عليه بسعر اقل من الشراء وبنفس
          الوقت ما بتنجبر تحجزله مساحة ببيتك.
        </li>
      </ul>
    </ul>
  </div>
  <div className="container-fluid">
    <ul className="ul1">
      <li className="right li">خدمات تيكمي TakeMe:</li>
      <ul className="ul2">
        <li className="bg-color li">منتجات للايجار</li>
        <li className="bg-color li">منتجات للبيع (جديدة وياد ٢)</li>
        <li className="bg-color li">منتجات للبيع والايجار للسياح</li>
        <li className="bg-color li">تقديم كل أنواع الخدمات</li>
      </ul>
    </ul>
  </div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n        .ul1 {\n            margin-left:0px;\n            padding-left: 0px;\n            list-style: none;\n        }\n        \n        .ul1 .ul2 {\n            margin-left: 5px;\n            padding-left: 5px;\n            margin-right:0px;\n        }\n        \n        .ul1 .li::before {\n            content: "\\2022";\n            color: #03AC85;\n            font-size: 30px;\n            font-weight: solid;\n            display: inline-block;\n            width: 1.6em;\n            margin-left: -1em;\n        }\n        \n        .ul1 .ul2 .li::before {\n            content: "\\2022";\n            color: #000000;\n            font-size: 20px;\n            font-weight: solid;\n            display: inline-block;\n            width: 1.8em;\n            margin-left: -1em;\n        }\n        \n        .right {\n            font-size: 16px;\n            color: #03AC85;\n            font-weight: 600;\n        }\n        \n        .bg-color {\n            padding-right: 5px;\n            font-size: 12px;\n            border-right: 3px solid #03AC85;\n            background-color: #F5F5F5;\n        }\n        \n        .about {\n       width:100% ;\n     margin-right: 0px;\n            direction: rtl;\n            font-family: Arial, Helvetica, sans-serif;\n        }\n    '
    }}
  />
  <div id="goog-gt-" className="skiptranslate VIpgJd-yAWNEb-L7lbkb" dir="ltr">
    <div style={{ padding: 8 }}>
      {/* <div>
        <div className="VIpgJd-yAWNEb-l4eHX">
          <img
            src="https://www.gstatic.com/images/branding/product/1x/translate_24dp.png"
            width={20}
            height={20}
            alt="Google Translate"
          />
        </div>
      </div> */}
    </div>
    {/* <div style={{ padding: 8, float: "left", width: "100%" }}>
      <h1 className="VIpgJd-yAWNEb-r4nke VIpgJd-yAWNEb-mrxPge">
        Original text
      </h1>
    </div>
    <div style={{ padding: 8 }}>
      <div className="VIpgJd-yAWNEb-nVMfcd-fmcmS" />
    </div>
    <div className="VIpgJd-yAWNEb-cGMI2b" style={{ padding: 8 }}>
      <div className="VIpgJd-yAWNEb-Z0Arqf-PLDbbf">
        <span className="VIpgJd-yAWNEb-Z0Arqf-hSRGPd">
          Contribute a better translation
        </span>
      </div>
      <div className="VIpgJd-yAWNEb-fw42Ze-Z0Arqf-haAclf">
        <hr
          style={{
            color: "#ccc",
            backgroundColor: "#ccc",
            height: 1,
            border: "none"
          }}
        />
        <div className="VIpgJd-yAWNEb-Z0Arqf-H9tDt" />
      </div>
    </div> */}
    <div className="VIpgJd-yAWNEb-jOfkMb-Ne3sFf" style={{ display: "none" }} />
  </div>
  </div>

          </div>
        </div>
      </>
  
    )
}

export default About