import { Card, Grid, Text, Link } from "@nextui-org/react";

const ListContentCard = ({post}) => {
  return (
    <div>
        
        <Card css={{ p: "$6", mw: "400px",width:"96%",margin:"auto" }}>
      <Card.Header>
        <img
          alt="nextui logo"
          src='/assets/images/TalentConnects.png'
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {post.companyName}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>{post.skillsRequired}</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          Hiring for {post.title}
        </Text>
      </Card.Body>
      <Card.Footer>
        <Link
          icon
          color="primary"
          target="_blank"
          href={`/jobs/${post._id}`}
        >
          Apply for this Job
        </Link>
      </Card.Footer>
    </Card>
    </div>
  )
}

export default ListContentCard