<template>
  <Container>
    <Title>{{ fullName }}</Title>
    <Subtitle>
      <span class="text-xs font-thin">Email: </span>
      <a :href="`mailto:${email}?subject=Resume`">{{ email }}</a>
      <span class="font-thin"> | </span>
      <span class="text-xs font-thin">Phone Number: </span>
      <a :href="`tel:${phoneNumber}`">{{ phoneNumber }}</a>
      <span class="font-thin"> | </span>
      <span class="text-xs font-thin">Address: </span>
      <span>{{ fullAddressSingleLine }}</span>
    </Subtitle>
    <Section header="Summary">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores aut, autem delectus deserunt explicabo facere facilis fugiat, fugit in ipsam, magni molestiae nobis optio pariatur quo saepe temporibus voluptatum?
    </Section>
    <Section header="Skills">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque aut, consequatur culpa doloribus illum laudantium minus molestiae qui sed similique sit voluptatibus! Consectetur dolore excepturi, maiores pariatur possimus quod!
    </Section>
    <Section header="Experience">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur at dolore ipsum laboriosam libero maiores omnis quasi, quos sint? Adipisci, eos facilis laudantium non numquam quam quis quo temporibus?
    </Section>
    <Section header="Education">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat, harum provident quam repellat voluptates. Accusamus aliquid autem cupiditate illo laboriosam necessitatibus quam quos! At dolorem ipsum omnis saepe voluptas.
    </Section>
  </Container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Container from './components/Container'
import Section from './components/Section'
import Subtitle from './components/Subtitle'
import Title from './components/Title'

export default {
  name: 'App',
  components: { Subtitle, Section, Title, Container },
  data: () => ({}),
  computed: {
    ...mapState([ 'phoneNumber', 'email' ]),
    ...mapGetters([ 'fullName', 'fullAddressSingleLine' ])
  },
}
</script>

<style>

</style>
