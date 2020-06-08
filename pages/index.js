
import Layout from "../components/MyLayout";
import DescIcon from "../Assets/Icons/DescSectionIcon1.svg";
import DescIcon1 from "../Assets/Icons/DescSectionIcon2.svg";
import DescIcon2 from "../Assets/Icons/DescSectionIcon3.svg";
import DescIcon3 from "../Assets/Icons/DescSectionIcon4.svg";
// import { getUsers, getData } from "../store/actions/usersActions";
import ScrollableSection from "../components/ScrollableSection";
import CardWithIcon from "../components/CardWithIcon";
import { Row, Col } from "react-bootstrap";
import StreetView from "../Assets/Icons/StreetViewIcon.svg";
import Diploma from "../Assets/Icons/DiplomaIcon.svg";
import Scheduler from "../Assets/Icons/SchedulerIcon.svg";
import SubscriptionCard from "../components/SubscriptionCard";
import DescriptionSection from "../components/DescriptionSection";
import { ReviewCard } from "../components/ReviewCard";
import { FAQCard } from "../components/FAQCard";
import { Banner } from "../components/Banner";

// const User = ({ user }) => (
//   <li>
//     <Link as={`/u/${user.id}`} href={`/user?id=${user.id}`}>
//       <a>{user.name}</a>
//     </Link>
//   </li>
// );

const Index = (props) => {
  const { users } = props;
  return (
    <Layout noContainer={<FAQCard />}>
        <Banner />
      <ScrollableSection />
      <Row style={{ marginTop: 100 }}>
        <Col md={4}>
          <CardWithIcon
            icon={StreetView}
            first
            text=" ﻚﻟ ﺐﺴﻧﺄﻟا ىﻮﺘﺴﻤﻟا ﻦﻣ ﺔﺳارﺪﻟا أﺪﺑا"
            subtext="ﺐﺳﺎﻨﻤﻟا ﺔﻐﻠﻟا ىﻮﺘﺴﻣ دﺪﺤﻳ رﺎﺒﺘﺧا لﺎﻠﺧ ﻦﻣ ﺎﻨﻌﻣ ﺎﻫﺪﻳﺮﺗ ﻲﺘﻟا ﺔﻐﻠﻟا ﻢﻠﻌﺗ ﻰﻓ ﻚﺘﻠﺣر أﺪﺒﺘﺳ"
          />
        </Col>
        <Col md={4}>
          <CardWithIcon
            icon={Scheduler}
            second
            text="ﻚﺗﺎﻴﺣ ﻂﻤﻧ ﻊﻣ ﺐﺳﺎﻨﺘﻳ لوﺪﺟ"
            subtext="ﺎﻫﺮﻴﻏ وأ ﺔﻴﺳارﺪﻟا وأ ﻪﻴﻨﻬﻤﻟا ﻚﺗﺎﺟﺎﻴﺘﺣا ﺐﺳﺎﻨﺗ ﺔﻔﻠﺘﺨﻣ سورد ﻦﻴﺑ رﺎﻴﺘﺧﺎﻟا ﻚﻨﻜﻤﻴﻓ  ﻚﺗﺎﻴﺣ ﻂﻤﻧ ﺐﺳﺎﻨﺗ هدﺪﻌﺘﻣ ﺔﺳارد تﺎﻗوا ﻚﻟ ﺮﻓﻮﻧ فﻮﺳ"
          />
        </Col>
        <Col md={4}>
          <CardWithIcon
            icon={Diploma}
            text=" ةﺪﻤﺘﻌﻣ تادﺎﻬﺷ"
            subtext="ةرود ﻞﻛ ﺔﻳﺎﻬﻧ ﺪﻌﺑ ىﻮﺘﺴﻣ لﺎﻤﻜﺘﺳا ةدﺎﻬﺷ ﻰﻠﻋ ﻞﺼﺤﺗ فﻮﺳ"
          />
        </Col>
      </Row>
      <div className="d-flex flex-column align-items-center"
        style={{ marginTop: 110, marginBottom: 60 }}>
        <span style={style.subscriptionheader} className="restext-align-center">
          ﺪﻤﺘﻌﻣ ﺪﻬﻌﻣ ﻦﻣ ﺔﻐﻠﻟا ﻢﻠﻌﺗ
        </span>
        <span style={style.subheader} className="restext-align-center">
          تﺎﻳﻮﺘﺴﻤﻟا ﻊﻴﻤﺠﻟ - ﻚﺗﺎﺟﺎﻴﺘﺣا ﺐﺳﺎﻨﺗ ﺔﺼﺼﺨﺘﻣ ﺔﻐﻟ تارود
        </span>
      </div>
      <Row>
        <Col md={6} className="res-flex-end">
          <SubscriptionCard
            title="ﺮﻬﺷ كاﺮﺘﺷا"
            desc="ﺔﻐﻠﻟا ﺮﻳﻮﻄﺗ دوا"
            tag
            listData={[
              "ﺔﻐﻠﻟا ىﻮﺘﺴﻣ ﺪﻳﺪﺤﺗ رﺎﺒﺘﺧا ",
              "ﺪﻤﺘﻋُم سرﺪﻣ ﻊﻣ ةﺮﺷﺎﺒﻣ سورد",
              "تﺎﻗوﺄﻟا ﻖﻴﺴﻨﺗو ةروﺪﻟا رﺎﻴﺘﺧا ﻰﻠﻋ كﺪﻋﺎﺴﻳ ﻰﻤﻳدﺎﻛأ رﺎﺸﺘﺴﻣ",
              "شهادة بعد نهاية كل مستوى",
              "ثﺪﺤﺘﻟاو ﺔﺑﺎﺘﻜﻟاو عﺎﻤﺘﺳﺎﻟاو تادﺮﻔﻤﻟاو ﺪﻋاﻮﻘﻟا ﻢﻠﻌﺗ",
              "ﺪﻬﻌﻤﻟا ﻲﻓ ﺔﺻﺎﺨﻟا ﺔﻴﻧوﺮﺘﻜﻟﺈﻟا ﺔﺒﺘﻜﻤﻟا ﻰﻟا لﻮﺧﺪﻟا",
            ]}
            btnText="ابدأ التعلم"
          />
        </Col>
        <Col md={6} className="res-flex-start">
          <SubscriptionCard
            title="تﺎﻗﺎﺒﻟا كاﺮﺘﺷا"
            desc="ﺔﻐﻠﻟا نﺎﻘﺗا دوا"
            btn2={true}
            listData={[
              "ﺔﻐﻠﻟا ىﻮﺘﺴﻣ ﺪﻳﺪﺤﺗ رﺎﺒﺘﺧا ",
              "ﺪﻤﺘﻋُم سرﺪﻣ ﻊﻣ ةﺮﺷﺎﺒﻣ سورد",
              "تﺎﻗوﺄﻟا ﻖﻴﺴﻨﺗو ةروﺪﻟا رﺎﻴﺘﺧا ﻰﻠﻋ كﺪﻋﺎﺴﻳ ﻰﻤﻳدﺎﻛأ رﺎﺸﺘﺴﻣ",
              "شهادة بعد نهاية كل مستوى",
              "ثﺪﺤﺘﻟاو ﺔﺑﺎﺘﻜﻟاو عﺎﻤﺘﺳﺎﻟاو تادﺮﻔﻤﻟاو ﺪﻋاﻮﻘﻟا ﻢﻠﻌﺗ",
              "ﺪﻬﻌﻤﻟا ﻲﻓ ﺔﺻﺎﺨﻟا ﺔﻴﻧوﺮﺘﻜﻟﺈﻟا ﺔﺒﺘﻜﻤﻟا ﻰﻟا لﻮﺧﺪﻟا",
            ]}
            btnText="ابدأ التعلم"
          />
        </Col>
      </Row>
      <div
        style={style.descHeaader}
        className="d-flex justify-content-center restext-align-center"
      >
        <span>ﻦﻳﺎﻠﻧوا ﺔﻐﻠﻟا ﻢﻠﻌﺗ تاﻮﻄﺧ</span>
      </div>
      <div>
        <DescriptionSection
          title="ىﻮﺘﺴﻣ رﺎﺒﺘﺧا .١"
          subtitle="ﺎﻬﻤﻠﻌﺗ ﺪﻳﺮﺗ ﻲﺘﻟا ﺔﻐﻠﻟﺎﺑ كاﻮﺘﺴﻣ دﺪﺤﻳ فﻮﺳ ىﻮﺘﺴﻣ رﺎﺒﺘﺧا"
          directionClass={"d-flex flex-row"}
          DescIcon={DescIcon}
          iconStyle={{ width: 366 }}
        />
        <DescriptionSection
          title="ﺐﺳﺎﻨﻤﻟا ﺖﻗﻮﻟا رﺎﺘﺧا .٢"
          subtitle="ﻚﺒﺳﺎﻨﻳ يﺬﻟا ﺖﻗﻮﻟا ﺮﺘﺧا .مﻮﻴﻟا لاﻮﻃ ﺎﻨﻳﺪﻟ سورﺪﻟا"
          directionClass={"d-flex flex-row-reverse"}
          DescIcon={DescIcon1}
        />
        <DescriptionSection
          title="٣. اختار الحصص المناسبه لك"
          subtitle="مدة الحصص ٦٠ دقيقه. اختار الحصص التي تريد التركيز فيها اكثر"
          directionClass={"d-flex flex-row"}
          DescIcon={DescIcon2}
        />
        <DescriptionSection
          title="٤. انضم للحصص"
          subtitle="اغلب الحصص لدينا تتكون من ١٠-١٢ طالب من انحاء العالم"
          directionClass={"d-flex flex-row-reverse"}
          DescIcon={DescIcon3}
        />
      </div>
      <div
        className="d-flex justify-content-center restext-align-center"
        style={{ ...style.descHeaader, marginBottom: 0 }}
      >
        <span>ماذا يقول الطلبه عن الدراسة معنا</span>
      </div>
      <div style={{ marginLeft: "-50vh" }}>
        <div
          className="d-flex flex-row review-container w-100"
          style={{ paddingTop: 60, paddingBottom: 116, paddingLeft: "50vh" }}
        >
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>

      {/* <h1>Users List</h1>
      <ul>
        {users && users.map((user) => <User key={user.id} user={user} />)}
      </ul> */}
    </Layout>
  );
};

// Index.getInitialProps = async (ctx) => {
//   const { users } = await ctx.store.dispatch(getUsers());
//   return { users };
// };

// const mapStateToProps = (state) => ({
//   users: state.usersReducer.users,
// });

const style = {
  subscriptionheader: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
    color: "#191C1F",
  },
  subheader: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 2.5,
    color: "#6B6C7F",
  },
  descHeaader: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
    color: "#191C1F",
    marginBottom: 60,
    marginTop: 115,
  },
};
export default Index;
