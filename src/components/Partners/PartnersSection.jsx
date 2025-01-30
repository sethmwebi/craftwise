import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PartnerCard from './PartnerCard';

const partners = [
  {
    name: "Inuka",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAC6CAMAAABoQ1NAAAAA81BMVEX////rhjdlslEAAADrhDIjHyDrhTTqgi7e3t7++PXqfBr87eDvoGwgHB387OH98un++vbriTzwpm/759jqfyTvoGW8u7vumlzztYb0wJrtkEn53cfzuZL29vYZFBXtlEwUDhBDQEFUUlLp6Ohxb3A2MjNiYGGRj4+FhIRdr0fw8PB8envNzc3j4uLY2NjCwcH64c2/3rf30bb2yak6Njesq6tzuWLk8eHytImZmJguKisMAAVYVVXwqXby+PHL5MWPxoKAvnCq1KDV6tBKRken053r+O10uWOIwnr3zbCbzI+y16qCv3PD4LyPxoFWrD7AraGl5JqiAAATIUlEQVR4nO1dCVvaShcOEBKxDWEJQlgCCiggIGWRRdG2Wlu09/b7/7/mO5NtJmRmiFetpM37PH0sSWZyzpsz58w+gvAOUCvqa+Wkl9KvlNV74ebbQ6VeTWdenFEmX81qsfEriPSeuL28E6paWR+9MJ9RtaxJUvnDqwj1frjsPt6ksqJcX1RekEulWtekWExevJpc74Onbjx+J4y1mCiW1//VQka5sijGYjFJe1XZfj/m3+Px+M8boSiDMrJcGD3fh2TyBU0EywBoYfccj8BG/NcnIR8zFZK14jPDjFopaHLMgpx7uUN+V9xdxk08ZKq2TqK8HgcnRB3nZIeMmJR9qTt+Z9w8dk02uo9Cvig63zi7ngQjRN2sJZcMSFgNuXHcWmzEkTfVRaxXrDgJoJlezBJkxMR62I3j0mGj+1lQCyKhmlyepLhpU5OsTCRAafTfJPZb4atrHPH4J2EskcpJWkxXmSaS1rOa53FgoxjyojIn2Ij/eBByskc/Sa5P8tSEeb28TcafEGRJOuJPQl7e0lCUi5S6+0gv+smIyYV30OA1cXdJshG/nAulbT6QDyl5LSS/tiqgPuOgG1JocPOvhw0UbNW6X1FJjK1xo/3DWhT9loGMo/qOqrwGPsW30L0TNrTvLslaIY/CTGqU03z2Y1tRPeT9HPMv23TEvwhqjq6uLJcq6mgtM8gATN5bnxfiqeujowvBNkstCqiqmsuyyRBzr9Wf9k6Y+8hA5vEgrFk6S3SfYd3Lhj3I/vAbB5jHVyHPMg8e5Nx7q/NC3P6iWUf8O+onfDYbkhT2IPudyka8++0m9Xzz0MIeZJ/obMRRy3bzXPMQy2H3o/4g63pTIVVgRxC6cYTdj1KCrFtcPgmV59EhF0JuHHdMMhAfN24/YSCEv0fwM9s4kDcV8pSmCxPiIuTdHLc8NqBleyfoz2CjHvIgK1xy2YjHH29oLVsWHaEPsnzjANyiQblgkGIhLyrUxooXX+ZCMaB5hD7IPu6mA4LtiNNgIxD6HsHbXZ4D4XIuBAq2Uiz0QTYAG95BOV5RCf2wWxA2zH7CyW7zEIshD7IPjJasDz8FNbfTPMSw9wh+3RlkHXD6CV02Poa8sTIPzEb85zzD7Ce0IYU9yP4bnI74k5Dm0xH6HkFuS3YbEGz55hH6Ybefz6EDgm2G5z3k0nvr80KwewTpfNwJY87ISj3sfpTdI0jHd+agHKJj8976vBDBg6xjHrxBuT9y2G2HedxkFnTzCP+wG7dHkIFvwqhMn74Qdj/KGHbjA03ep5mHVA55kM0Eadf70H28yZQpTRct7HMEeT2C3S775q0wPvQbhxTydv2c3ZLtdh/vnuIsQn7cZPyDcodh96PsINv98QD3b3wzo5zbn4TRNh1ygT8Bd+/B7BH8/jh3nvlEr8L7B+X+1GG37venOfnUp8+UMoP6Cb2jLmLYewT/oZJx+XS39dzNLY2QrUG50PcI0ua2dC8/zWmP3vknSX2+8Uzel8IeZP1+tBt/Yj499xFyK2xw1VQsh9yPPvjY+MImA2H+2et5f84FHGy1lyyn3Ad4/Wg3/u8/N7uS3D1+JxJ1n4S8U1rE0A+7PZsMhLuvl5gQNChnjWH/WcNuUAF9CJpw/tWNMhBs01bTRQv7qmEiyP76QgsmbDx8dRoz3bk1nzD0c1twY+Xy83Y1IwCe7OR2P6EU9h5BuyXbvfz2PMtw8PD0wywzn4RKVvpDJuJ3L7/+B8uw8fAPWgZkTt4PfY8gqlJBnWv+olbGw+3PLgq22bAPu938ine73wJFVn4+d1+g6VIIuR8VhPj3ry8nw8Td0/B/r5PTe+KVyADULl4tqwgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFsCD5NJeCTL5n38toz85+Zn1qZLCZj/qa5GTWdz28mE32tTyabUT7Nm72lVvSFXtm9C28qvanq47xH3PRYL212nEaRyo8nAQ6sSIHI48lkgkQe5/NqsFndo6KmyZpW3LBZ/FDR13VJA8iybP6pr/Ux6/ycSg49dljcNcNLXWThQS22IDTb1NElrcCbZasuRBChWOF+dfjG62L2EIscK5Q2o92MpOvWPHCRuS9EpVoAubc29pc1qUA/hidftDKUs/xp5amSbM7IlzS8OrSiWa+ROUvNP3w085fLHMrS+rosy55tliRRlsu7z7hw1xjJ9M368zn6fuXm3uZrv8YZ3c1wzX133tkzjFjW5G4EpDEX0I5stjlrw1J6UZJp63IldMYFTyZB+OguEjikZJ8qMfYrdxj3HRyD19PvWKCj47Vejoiqu/ZcKjNSVfAC00NG9pWyzN4/R5TrXKP9iLP30zHauaeoz2bxXj476MBb6bsreT7gpfiH9EQTCWtK31otU9X4mwmJss5xITw6xvXd2zbJZa9Ub0lHRidMVcrSYpe62L1vn8bZ3JJDxzgbZAu8LT7ekA748ETBlXWKUuqujYR28cGm44OXDQni1SGCpnndiegJIW9Hh7oml8pRHXWm6j37RbRkhmjrFZl9UgOTDrUokxlL2dxkhI5ARBE9GyOzF8nF4W9GR94jj0RVaOMVK1vQK0iG/EgvZCWSTIkVYJh0kFtqiNmc10OM1+QWAuTmTW9Fx4j0YyJ9iUeeYEPcOjcqMymQd1nnQ7HoqBA7asj1sa+wjYlVnuSuI29ER4UMnnKRvuCFiINiWd8uTBmdKP1yiR5eGHSkCOOQizQq04Txims37dvQscl62KBXHUY4qIhl2iNkLiI9DwYdaSyZyKgOp3F5kbA3fQs6PN8VqqOMfIkNlRgtjg1+AWN3NgYdE5dpiXn0K7GnAj657g3oAEslAyxrLVSF0HXNeGmVqMVRm9x0OjJ4G1GZGaRx8wRUdzJ/fTrUOlGzkmIsTYUFYaysZ0i9qKva6XSo2DjK7IZ6Hrtb0SlQr06HJ8CKWebSfBW3vjR2Ow1/QXqziE4H3qJaLLJr+BmsktuAeG06Kh42yuxemVHdbf9Rq+8WUoQzpXXY0OkgigFvr6oJLq0lW85XpmNM7qBFjxc2Nu5j8prTRsOlhborLJ0OnIi7WygWVszZqV+XjoknpMi8A6wnQcqK50PTKra76OCuhicMtP4GdGRKh0QLVizwugPJgssV2XUD8kfKbTodMSwG74ukXdregg517Q0p3M413JblbxqkuhtyUeml00HIwaMD78fyBnSkyU2hpSyv0waQJkThvRf7UrFI4Xdv6RiRW9+AP9gxXILpEAu8MY2MW77DRIf2wbPrHtcdmPgvdFBU21M6Yt6zV6HNvGOM5Pl0SLSwva90bEHSivyD0f8uOsyT4nlDAn8bHWhcz9elg/F30CF5Bhalj8ws/wo6pHLZ0wcuMztf/gY65Fw+v/CcTyuxGiQkHfkMG2p46dBK6DuPc57xZ21CDblErbRcqnKQdV8bLjokzfacqk4aiEQdfiPogCd4wBmFig5Rxl09nkEWKUsrL2lPnT4IfjMdEn++C6bDndBA0iF7B4bWRIGRZIo/3VM6UiXc0ObSgQeX3UErgg4xt/XeKtGGkUS/3e0pHcSWxSJ3dhjRtemIRTbhfBWuMcGHWPe5jz2lgziFmNtJJxBd2s4r+CP4JB/+DeX3lQ582Iq84LRCPxxisdxr/PkdY1xF9RdEkg6Rh99MBz49Ao9FUYC7cPGQ2a7ZP8Tp6PLHLaoJOrKFHBuF31vvIPv0eJ02uHMaz/HaOTeMGKLfnqFB1kq5PQG/t1ZKTM2M+ecVuiAGVDU35U460ngrdXnrtLg9bbN4hsmZ5pHBE5vEont198zBDeEgvHFrb+lQizRVvSBOLyLmQ+6mg5gKJ+c83mNv6SCG0llz0ohzRsmjvXbT4eHRUxfbXzpUoq5N3Qw/TzRByKO9AtCRwqXMS/X+0iHoOLlE6dAjG2Se+ZAB6CBGpr0zEvaYDmJSSUySct55dnlyZpN3TD4IHcTp6IekaHtMhzDyzF7K5vSKnUt+UiqSvX3eshSEDqIl7GkE7DMd0HAhdRalbLlcB5TLMc9qENk7ahyIjgoegidnu+01HYJOzAFAtxFE0dMv7j9JIRAdWDaP89hvOjyLC+iQfLN0gtGB35kl3PB+0yFkNpxFNqbU2ep2zAlGx4Q6keNN6cCdETHumkg2HWiSG29pCW1iN6aDPRWSWDUWIwddgtPB7cvFk2Yk2mQonlwCsXSMNsFQ1TXqkjRUTrQSjWbX4fDOZ1GxdRD64EVn3G4WYtKUSFv8V7FdvSSTYWts68Ec5XGeizmpqZPm1UU5trWUBC0yyZYXdJvT7YAkyZxu1pTzBb3zqCf2e8QdKzTzrsjUKarVrCyKIKKXU+cqc46vo4D9HPVjA9RJqVAWNVk2e6LQOEe2uN4wrblkZ8c95yqdE2WUV93j1lJVtLxV1uo71kJmNnUZPZdlnAFTqeYKhcXWdJLMGK7mFv7yvY3xgpLagw+Vjb5YFxDWi+qmwht9yZjZVflLhgV1sygUctWtjDKV6rqw1nef+zPSS4V1ldmvnVHTab86cFUNsnydnnoLKXgIoKZ25hjstak07SmUdmdShKDPRYgQIUKECBEiRIgQIThqvfeWYJ9QOxq+Sb6Dg4NBzfPTBL5m/nKlQPcHgyZOcOCA/D0YEN+uNzg6Grg5NOE25F2DP03PFZzZgPbhB8Q7hIOzs/6AELNppWvWyKexVs2D2dGwR/z06kziJJE4xkQ34aeJVd9RBv2aunKs4JexOp25kq3sBAlLuZr5f2N6euQ8MGw14Ep7ZhFS68APeN+BkkicWxK2EomG/TbDTA2J/cKa73EvO2Laop9aMt8vne90nEgozhfoze4TV4mrlqORgEQwGMfPnRrKCUHHqZFEUI6dxEcJ+NlwtB8cK3BTMRrXzv2pYiZIunSg+4rSSC7tFCcNBV1JtKz7Zw1FQXS0lUbH0u7cUBzyV2buSmPV2eajicQwZi4dlpiGLXrLMNMZxumBc19p23TUzhV0N9lIOiZ4Db+vZgIVfjrMT7S6wPeVpLEk6FitEpD5fdOlQ/FYR1JpTxuNpNKwcl02QOr2VSMxDEbHaqpcQY6ucdlYXqGv0CLoUAjrQHRMk8BY4qy2TccSPodxBcbl6HCRRBqdNgUafHQYpwOhVnO/zso4PlaMU0yHcd4bAtlO7lNFmfZwAqADiO+dNexPWQNJEwfC4NzWz6TjgE0Hejuo3jjfEhP0v28bJz33p3I9xG9tGcp9XxgmQMttOmpX8O1Om7XZmSMh8HOimEIEo2PYbLpO6Qje0GkbjnsBOhpQ5Pvw4mtMxwFOYNEhXGA6wFDuL1w/BnQklYtm84JJR1PoGT46mkllenZvrByjOTEMkw4B0zFEyZXj3hYdUNgbHU9Wp8bVbKok6KWF4jva7faxU1Y6RqNzcaysZh46asDu1KHDTJDsu3Q0zvr9c9DIyuIIvo6RuJ85JRnoSCIzh29GpeP6oDlrQB5eKWfAUx8+lXMZ1J12lstl36XjeDZE6Vrb1tFpJBMetzlsKIlmy3ANficdoGvS/gy9awP8BsjR8dIx9dCBPCWmA5zLCgS7twTrnSVRlonTPqbDApUOZdo6JbJz0IKvAg+6JR75jkbjqjFzbsNb23DN8ZCYDlAo4amizBJKW5hdJa+ooZbhSu1sL0Db86Nrs0iTdCRJOkynRtCB6FSOnbJZgzgH0tr07LKOJIQHxVC2LHkA6rUuWlBi+pgOo9EwCDrQS9vL2jYdUFg9dNSuoWAdgRQ+b02nA4IV9qRLRPsKxakjko4B+I4Thw5l2sQJEB0N5L2W+BXCxT1Ib8Uq03f0a7UhK7IojavEdLtScNQGG1whi8Jff9rqdDpuYYF08M/VBNMB77siZUECgkpQglsCBYgOEK9X89Jh6dcz39OAUGVnadLRbIJ6V0RkQXTYGSBXeoRcS8IJZMuzJspHsdzgrsiinFwM/SEQcWiK0Wg5rtK4HuD7kP3JYEl8BEwHhBsF8d9fWilRxIaskHUx6FidtlqnnYFNh9KGn62W+YH6oOxJp3PWVuxSC3QoJ+crKFHTA4eOJErfcnyDGVlQqLTJnymJVavTVpTVgUsHp95BrQ8cgFTHYAv3itI+cOkgIqUZWZogrBMBiXrHNVCZ7LTaiTPnzvS80wGnoNBKC7puGEbjfmjTYf20Su8R1MFmFmfK0KYD7sNnmDp5IVcKCQzb21h0INYMU8Um1AahlEM9xXLG/4mOPnwOlHzplngaHWa56PiqYcN7ZFqgQAJdAMNtnMMzF4ZidAQ/rj21/6bz0yykvfNE4gplcuY414O2dRs3ANw2i0OH+b8l/LFqREf3CbDNRsK2crfNkiTbLIadHTjlawodSzv7Pnqzmet9InFP0AFtFmhVmO0ly+1AmyXpFKb+NZLgqmG62ZmT1TSROKHElv6RBaumVHN+Hg2cX+hyD/6aEtcuzJs9nNGFk8BWw0rau3ByhEzOOp1l30kxhAdqVkZD94pTTUOvociI0vTs+xfOW8kH+1YWSNyhe8G9XxsiCQZuVk1bNVw5/D/o2Uxc1R6bdQAAAABJRU5ErkJggg==",
    website: "https://inukaleadership.net/",
    delay: 0.2
  },
  {
    name: "Career Kickstart KE",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQE-x0yP7DJVag/company-logo_200_200/company-logo_200_200/0/1630560839614?e=2147483647&v=beta&t=cL61HW_DLGGeKt3W0ACUCXSm9u_p8h-O5rCq0oKZTDs",
    website: "https://careerkickstart.co.ke/",
    delay: 0.4
  },
  {
    name: "Ultra Events",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQV7FhM9Tr70m88wqKnvSos1JkeYoafZdYMg&s",
    website: "https://www.ultraevents.org/",
    delay: 0.6
  }
];

const PartnersSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2A1011] to-orange-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2 
            className=" font-montserrat font-bold text-5xl text-orange-500 mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
           
          >
            PARTNERS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {partners.map((partner, index) => (
              <PartnerCard key={index} {...partner} />
            ))}
          </div>

          <motion.div
            className="absolute left-0 right-0 h-1 bg-orange-500 mt-12"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PartnersSection;