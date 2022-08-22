import MeetupDetail from "../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      title="title"
      address="address"
      description="description"
      image="https://miro.medium.com/max/1400/1*-NYspjQ4yw7b_ys_0F7pQQ.jpeg"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch api
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        title: "title",
        address: "address",
        description: "description",
        image: "https://miro.medium.com/max/1400/1*-NYspjQ4yw7b_ys_0F7pQQ.jpeg",
      },
    },
  };
}

export default MeetupDetails;
