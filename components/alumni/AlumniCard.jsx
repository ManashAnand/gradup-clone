import { Card, Grid, Text, Link } from "@nextui-org/react";

export default function AlumniCard({data}) {
  return (
    <Card css={{ p: "$6", mw: "400px" }}>
      <Card.Header>
        <img
          alt="nextui logo"
          src={data.profilePhoto}
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {data.name}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          Works at {data.companyName} <br />
          Contact No - +9194********
        </Text>
      </Card.Body>
      <Card.Footer>
        <Link
          icon
          color="primary"
          target="_blank"
          href="https://github.com/nextui-org/nextui"
        >
          Contact
        </Link>
      </Card.Footer>
    </Card>
  );
}
