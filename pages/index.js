import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "First Meetup",
    image: "https://miro.medium.com/max/1400/1*-NYspjQ4yw7b_ys_0F7pQQ.jpeg",
    address: "Some address 4, 12312 some city",
    description: "some description",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image: "https://miro.medium.com/max/1400/1*-NYspjQ4yw7b_ys_0F7pQQ.jpeg",
    address: "Some address 5, 12312 some city",
    description: "some description",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from api

  return {
    props: {
      meetups: DUMMY_DATA,
    },
  };
}

// export async function getStaticProps() {
//   fetch data from api
//   return { props: { meetups: DUMMY_DATA }, revalidate: 3600 };
// }

export default HomePage;
