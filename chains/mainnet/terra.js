module.exports = {
  chainID: 'phoenix-1',
  lcd: 'https://phoenix-lcd.terra.dev',
  gasAdjustment: 1.75,
  gasPrices: { 
    uluna: 0.015,
    "ibc/B3504E092456BA618CC28AC671A71FB08C6CA0FD0BE7C8A5B5A3E2DD933CC9E4": 0.018, // axlUSDC
    "ibc/2C962DAB9F57FE0921435426AE75196009FAA1981BF86991203C8411F8980FDB": 0.018, // noble USDC
  },
  prefix: 'terra',
  coinType: '330',
  baseAsset: 'uluna',
  name: 'Terra',
  icon: process.env.CF_PAGES_URL + '/img/chains/Terra.svg',
  alliance: true,
  channels: {
    'akashnet-2': 'channel-273',
    'axelar-dojo-1': 'channel-6',
    'carbon-1': 'channel-36',
    'cheqd-mainnet-1': 'channel-301',
    'chihuahua-1': 'channel-44',
    'comdex-1': 'channel-39',
    'cosmoshub-4': 'channel-0',
    'crescent-1': 'channel-37',
    'mainnet-3': 'channel-315',
    'juno-1': 'channel-2',
    'kaiyo-1': 'channel-10',
    'mars-1': 'channel-78',
    'migaloo-1': 'channel-86',
    'osmosis-1': 'channel-1',
    'stride-1': 'channel-46',
    'pacific-1': 'channel-158',
    'noble-1': 'channel-253',
    'stafihub-1': 'channel-204',
    'neutron-1': 'channel-229',
    'injective-1': 'channel-255',
    'dydx-mainnet-1': 'channel-299',
    'celestia': 'channel-300',
    'stargaze-1': 'channel-324',
    'andromeda-1': 'channel-351',
  },
  // NEW ICS CHANNELS
  ics20Channels: {
    'carbon-1': [
      {
        contract:
          'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
        channel: 'channel-41',
        otherChannel: 'channel-16',
      },
    ],
    'juno-1': [
      {
        contract:
          'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
        channel: 'channel-32',
        otherChannel: 'channel-153',
      },
    ],
    'kaiyo-1': [
      {
        contract: 'terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x',
        channel: 'channel-34',
        otherChannel: 'channel-43',
        tokens: ['terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26', 'terra1x62mjnme4y0rdnag3r8rfgjuutsqlkkyuh4ndgex0wl3wue25uksau39q8'],
      },
      {
        contract:
          'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
        channel: 'channel-28',
        otherChannel: 'channel-36',
      },
    ],
    'migaloo-1': [
      {
        contract:
          'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
        channel: 'channel-87',
        otherChannel: 'channel-2',
      },
    ],
    'osmosis-1': [
      {
        contract:
          'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
        channel: 'channel-26',
        otherChannel: 'channel-341',
      },
    ],
    'chihuahua-1': [
      {
        contract: 'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
        channel: 'channel-114',
        otherChannel: 'channel-42',
      }
    ],
    'pacific-1': [
      {
        contract: 'terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
        channel: 'channel-171',
        otherChannel: 'channel-8',
        tokens: ['terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26'],
      }
    ],
    'neutron-1': [
      {
        contract: 'terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
        channel: 'channel-167',
        otherChannel: 'channel-5',
        tokens: ['terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26'],
      }
    ],
    'injective-1': [
      {
        contract: 'terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
        channel: 'channel-91',
        otherChannel: 'channel-104',
        tokens: ['terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26'],
      },
      {
        contract: 'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
        channel: 'channel-116',
        otherChannel: 'channel-118',
      }
    ]
  },
  // LEGACY ICS CHANNELS (to be removed soon)
  icsChannels: {
    'carbon-1': {
      contract:
        'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
      channel: 'channel-41',
      otherChannel: 'channel-16',
    },
    'juno-1': {
      contract:
        'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
      channel: 'channel-32',
      otherChannel: 'channel-153',
    },
    'kaiyo-1': {
      contract:
        'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
      channel: 'channel-28',
      otherChannel: 'channel-36',
    },
    'migaloo-1': {
      contract:
        'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
      channel: 'channel-87',
      otherChannel: 'channel-2',
    },
    'osmosis-1': {
      contract:
        'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
      channel: 'channel-26',
      otherChannel: 'channel-341',
    },
  },
  // doesn't require IBC channels since it's already on all the other chains
  explorer: {
    address: 'https://terrasco.pe/mainnet/address/{}',
    tx: 'https://terrasco.pe/mainnet/tx/{}',
    validator: 'https://terrasco.pe/mainnet/validator/{}',
    block: 'https://terrasco.pe/mainnet/block/{}',
  },
  tokens: [
    {
      token: 'uluna',
      symbol: 'LUNA',
      name: 'Terra Luna',
      icon: process.env.CF_PAGES_URL + '/img/coins/Luna.svg',
      decimals: 6,
    },
    {
      token: 'terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
      symbol: 'xxx',
      name: 'xxx',
      icon: process.env.CF_PAGES_URL + '/img/coins/xxx3.png',
      decimals: 10,
    },
    {
      token: 'terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
      symbol: 'CUB',
      name: 'Lion Cub Dao',
      icon: process.env.CF_PAGES_URL + '/img/coins/cub.png',
      decimals: 6,
    },
    {
      token: 'terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      symbol: 'Dinheiros',
      name: 'dinheiro',
      icon: process.env.CF_PAGES_URL + '/img/coins/Dinheiros.png',
      decimals: 0,
    },
    {
      token: 'terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
      symbol: 'Reis',
      name: 'real',
      icon: process.env.CF_PAGES_URL + '/img/coins/Reis.png',
      decimals: 6,
    },
    {
      token: 'terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
      symbol: 'Escudos',
      name: 'escudo',
      icon: process.env.CF_PAGES_URL + '/img/coins/Escudos.png',
      decimals: 6,
    },
    {
      token: 'terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
      symbol: 'Alem',
      name: 'alentejo.money',
      icon: process.env.CF_PAGES_URL + '/img/coins/Alem.png',
      decimals: 6,
    },
    {
      token: 'terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
      symbol: 'BLUE',
      name: 'BLUE CUB Dao',
      icon: process.env.CF_PAGES_URL + '/img/coins/blue.png',
      decimals: 6,
    },
    {
      token: 'terra1e5vchf97lakl6sulztkn54aapekzfzsa6amdt88exvwmu25s3z0sg6hplq',
      symbol: 'ASTRO-USDC ampLP',
      name: 'ERIS ASTRO-USDC ampLP',
      icon: process.env.CF_PAGES_URL + '/img/coins/ampLP.png',
      decimals: 6,
    },
    {
      token: 'terra1ymwcpz20lcaue5kkawj3t2fe7et4xd7xkxtuxzc43at0dvcywrsqcuunk2',
      symbol: 'LUNA-ampLUNA ampLP',
      name: 'ERIS LUNA-ampLUNA ampLP',
      icon: process.env.CF_PAGES_URL + '/img/coins/ampLP.png',
      decimals: 6,
    },
    {
      token: 'terra1zanekgprlqpdhu2nmqq9efcnr5f4f76vph2fykvw94pq8sylltdsll64qj',
      symbol: 'LUNA-stLUNA ampLP',
      name: 'ERIS LUNA-stLUNA ampLP',
      icon: process.env.CF_PAGES_URL + '/img/coins/ampLP.png',
      decimals: 6,
    },
    {
      token: 'terra1m9fvkwjpwd4ddgkxd5ddvc2jst9wtv33u7kj89tq2wr0tjm34j8qyfmpwm',
      symbol: 'LUNA-TPT ampLP',
      name: 'ERIS LUNA-TPT ampLP',
      icon: process.env.CF_PAGES_URL + '/img/coins/ampLP.png',
      decimals: 6,
    },
    {
      token: 'terra1as76h247wvey3aqmw22mlkq8g6vj8zj7qw4wywwn388s2mjt0rtqpp570z',
      symbol: 'LUNA-USDC ampLP',
      name: 'ERIS LUNA-USDC ampLP',
      icon: process.env.CF_PAGES_URL + '/img/coins/ampLP.png',
      decimals: 6,
    },
    {
      token: 'terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
      symbol: 'ampLUNA',
      name: 'ERIS Amplified LUNA',
      icon: process.env.CF_PAGES_URL + '/img/coins/ampLuna.svg',
      decimals: 6,
      lsd: 'uluna',
    },
    {
      token: 'terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      symbol: 'bLUNA',
      name: 'boneLuna',
      icon: process.env.CF_PAGES_URL + '/img/coins/bLuna.png',
      decimals: 6,
      lsd: 'uluna',
    },
    {
      token: 'terra1uxk0lgyktspxlen3a2f2dnyclj8gjta2mwg0murwcyxflrlqk4aqey3pqt',
      symbol: 'QUEEN',
      name: 'QUEEN',
      icon: process.env.CF_PAGES_URL + '/img/coins/queen1.png',
      decimals: 6,
    },
    {
      token: 'terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
      symbol: 'DROGO',
      name: 'DROGO',
      icon: process.env.CF_PAGES_URL + '/img/coins/drogo.png',
      decimals: 6,
    },
    {
      token: 'terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
      symbol: 'GUGU',
      name: 'GUGU',
      icon: process.env.CF_PAGES_URL + '/img/coins/gugu.png',
      decimals: 6,
    },
    {
      token: 'terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
      symbol: 'Alem',
      name: 'alentejo.money',
      icon: process.env.CF_PAGES_URL + '/img/coins/alentejo.money.png',
      decimals: 6,
    },
    {
      token: 'terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
      symbol: 'ASTRO',
      name: 'Astroport Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/AstroportToken.png',
      decimals: 6,
    },
    {
      token: 'terra1x62mjnme4y0rdnag3r8rfgjuutsqlkkyuh4ndgex0wl3wue25uksau39q8',
      symbol: 'xASTRO',
      name: 'Staked Astroport Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/StakedAstroportToken.png',
      decimals: 6,
    },
    {
      token: 'terra1kkpf3f049trkyscv0av2pa9ad02dzls7f6m8s24q07ehetggytesru7qqp',
      symbol: 'BGT',
      name: 'Brand Governance Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/BrandGovernanceToken.png',
      decimals: 6,
    },
    {
      token: 'terra10aa3zdkrc7jwuf8ekl3zq7e7m42vmzqehcmu74e4egc7xkm5kr2s0muyst',
      symbol: 'SOLID',
      name: 'Solid',
      icon: process.env.CF_PAGES_URL + '/img/coins/Solid.svg',
      decimals: 6,
    },
    {
      token: 'terra1t4p3u8khpd7f8qzurwyafxt648dya6mp6vur3vaapswt6m24gkuqrfdhar',
      symbol: 'CAPA',
      name: 'Capapult',
      icon: process.env.CF_PAGES_URL + '/img/coins/Capapult.svg',
      decimals: 6,
    },
    {
      token: 'terra17gck626vgax9jpe6utm7dhx4vdzawfkt0jhru03l7a3dzu98wedsfad4sz',
      symbol: 'dUST',
      name: 'Depegged UST',
      icon: '',
      decimals: 6,
    },
    {
      token: 'terra1ttspm8jgeylc6us3mlpwpmlwzr3rkesm70vn6zkfr07pz7e3rzkq73ah2j',
      symbol: 'GIDO',
      name: 'Gidorah',
      icon: '',
      decimals: 6,
    },
    {
      token: 'terra1d4j9lsl453mkvtlg4ctw8y52rdkhafsaefug0hq0z06phczuvvvs7uq0vg',
      symbol: 'IDC',
      name: 'INTERCHAIN DAO COIN',
      icon: process.env.CF_PAGES_URL + '/img/coins/INTERCHAINDAOCOIN.png',
      decimals: 6,
    },
    {
      token: 'terra1ulr678u52qwt27dsgxrftthq20a8v8t9s8f3hz5z8s62wsu6rslqyezul4',
      symbol: 'LBUN',
      name: 'LUNC Burn Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/LUNCBurnToken.svg',
      decimals: 6,
    },
    {
      token: 'terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
      symbol: 'ROAR',
      name: 'Lion DAO',
      icon: process.env.CF_PAGES_URL + '/img/coins/LionDAO.png',
      decimals: 6,
    },
    {
      token: 'terra1ee4g63c3sus9hnyyp3p2u3tulzdv5ag68l55q8ej64y4qpwswvus5mtag2',
      symbol: 'LIRA',
      name: 'Lira Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/LiraToken.svg',
      decimals: 6,
    },
    {
      token: 'terra1uv8ltv32tuq4qf6xspytpv058p0pef64s5xdncfywjexv22lfjzs7mul8s',
      symbol: 'LUBI',
      name: 'Luna Bird Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/LunaBirdToken.png',
      decimals: 6,
    },
    {
      token: 'terra1ry9f6alqyf9dpj04u9ymq5u4whjndu485agh6gusn89dmqse3ggsnzducj',
      symbol: 'OPZA',
      name: 'Luna optimizer token',
      icon: '',
      decimals: 6,
    },
    {
      token: 'terra19p20mfnvwh9yvyr7aus3a6z6g6uk28fv4jhx9kmnc2m7krg27q2qkfenjw',
      symbol: 'ORNE',
      name: 'Orne Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/OrneToken.png',
      decimals: 6,
    },
    {
      token: 'terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      symbol: 'Dinheiros',
      name: 'dinheiro',
      icon: process.env.CF_PAGES_URL + '/img/coins/dinheiro.png',
      decimals: 0,
    },
    {
      token: 'terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
      symbol: 'Reis',
      name: 'real',
      icon: process.env.CF_PAGES_URL + '/img/coins/real.png',
      decimals: 6,
    },
    {
      token: 'terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
      symbol: 'Escudos',
      name: 'escudo',
      icon: process.env.CF_PAGES_URL + '/img/coins/escudo.png',
      decimals: 6,
    },
    {
      token: 'terra1xe8umegahlqphtpvjsuwfzfvyjfvag5h8rffsx6ezm0el4xzsf8s7uzezk',
      symbol: 'RED',
      name: 'Red',
      icon: process.env.CF_PAGES_URL + '/img/coins/Red.svg',
      decimals: 6,
    },
    {
      token: 'terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
      symbol: 'SEAS',
      name: 'SEAS',
      icon: process.env.CF_PAGES_URL + '/img/coins/SEAS.png',
      decimals: 6,
    },
    {
      token: 'terra1q8kfp0v9rhef0d3u44ds9shwvwcusjheh8nhye3n7gwjd95ze96sehyp6w',
      symbol: 'SANT',
      name: 'SANTERRA SANT Token',
      icon: '',
      decimals: 6,
    },
    {
      token: 'terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
      symbol: 'SAYVE',
      name: 'Sayve Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/SayveToken.png',
      decimals: 6,
    },
    {
      token: 'terra16zc783wt2w5lvlt9u4as977lt39c3se427akkenrzyax5vtde70qa89ukv',
      symbol: 'xSAYVE',
      name: 'Staked Sayve Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/StakedSayveToken.png',
      decimals: 6,
    },
    {
      token: 'terra14xsm2wzvu7xaf567r693vgfkhmvfs08l68h4tjj5wjgyn5ky8e2qvzyanh',
      symbol: 'LunaX',
      name: 'LunaX Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/LunaXToken.png',
      decimals: 6,
    },
    {
      token: 'terra1l23rtnsp0fcfgs2zlww4gcd8dlznkm580p5yrsangcen9jjjhuqstd2sle',
      symbol: 'SD',
      name: 'SD Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/SDToken.png',
      decimals: 8,
    },
    {
      token: 'terra1xumzh893lfa7ak5qvpwmnle5m5xp47t3suwwa9s0ydqa8d8s5faqn6x7al',
      symbol: 'STEAK',
      name: 'STEAK Liquid Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/STEAKLiquidToken.png',
      decimals: 6,
    },
    {
      token: 'terra1gwz4m0q6vq6nyunt88vlsf5u3ve0fv3qc40q0mdky58s4fjy4fcsqpkman',
      symbol: 'TALIS',
      name: 'TALIS Token',
      icon: '',
      decimals: 6,
    },
    {
      token: 'terra13j2k5rfkg0qhk58vz63cze0uze4hwswlrfnm0fa4rnyggjyfrcnqcrs5z2',
      symbol: 'TPT',
      name: 'Terra Poker Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraPokerToken.png',
      decimals: 6,
    },
    {
      token: 'terra1e9s5m6vrl9ms75q0862llq2vcsz8r43czm36s6xnn3vh8dfmwe0s3c86e8',
      symbol: 'xTPT',
      name: 'Terra Poker Governance Token',
      icon:
        process.env.CF_PAGES_URL + '/img/coins/TerraPokerGovernanceToken.png',
      decimals: 6,
    },
    {
      token: 'terra1564y9uxzhast8sk5n47teypy4mxy7fg5vne2msuztsft7qk3pj9sxxuxmc',
      symbol: 'TFLOKI',
      name: 'TerraFloki Token',
      icon: '',
      decimals: 6,
    },
    {
      token: 'terra18ha3r45syfpp46qg85p9wqxy6p0nj82rlxt7c74qkdr0yzcjut9sw7gerz',
      symbol: 'TRUMP',
      name: 'TRUMP',
      icon: process.env.CF_PAGES_URL + '/img/coins/TRUMP.png',
      decimals: 6,
    },
    {
      token: 'terra1qx284aak0wl7vrvlsc6cwcsn6xwajragkh6cjqj87m9p34hx5l2s22p3cp',
      symbol: 'TUNA',
      name: 'Tuna Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/TunaToken.png',
      decimals: 6,
    },
    {
      token: 'terra1gy73st560m2j0esw5c5rjmr899hvtv4rhh4seeajt3clfhr4aupszjss4j',
      symbol: 'VKR',
      name: 'VKR Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/VKRToken.png',
      decimals: 6,
    },
    {
      token: 'terra15hhqg8gyz04zapynqtk7uvlsp7lzay7etrt9ann0276v94yae63sxygeat',
      symbol: 'wETH',
      name: 'Wrapped Ether (Portal)',
      icon: process.env.CF_PAGES_URL + '/img/coins/WrappedEther(Portal).png',
      decimals: 8,
    },
    {
      token: 'terra1ctelwayk6t2zu30a8v9kdg3u2gr0slpjdfny5pjp7m3tuquk32ysugyjdg',
      symbol: 'wSOL',
      name: 'Wrapped SOL',
      icon: process.env.CF_PAGES_URL + '/img/coins/WrappedSOL.png',
      decimals: 8,
    },
    {
      token: 'terra1qmnxhecc3vnmhef9q7vap7spx9tgpnw9fqe8ljqfwrlz7rur9y5qu2dlp6',
      symbol: 'wAVAX',
      name: 'AVAX (Portal)',
      icon: process.env.CF_PAGES_URL + '/img/coins/AVAX(Portal).png',
      decimals: 8,
    },
    {
      token: 'terra1rwg5kt6kcyxtz69acjgpeut7dgr4y3r7tvntdxqt03dvpqktrfxq4jrvpq',
      symbol: 'UST',
      name: 'UST (Portal)',
      icon: process.env.CF_PAGES_URL + '/img/coins/UST(Portal).png',
      decimals: 6,
    },
    {
      token: 'terra16h7keds26d52xj8rn9jfx6lj2x0ja79lt56yxnmlm4xsttf5mu5smq5f78',
      symbol: 'LUNC',
      name: 'LUNC (Portal)',
      icon: process.env.CF_PAGES_URL + '/img/coins/LUNC(Portal).png',
      decimals: 6,
    },
    {
      token: 'terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
      symbol: 'NICO',
      name: 'NICO MONEY',
      icon: process.env.CF_PAGES_URL + '/img/coins/Nico.png',
      decimals: 18,
    },
    {
      token: 'terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
      symbol: 'GEM',
      name: 'GEM DAO',
      icon: process.env.CF_PAGES_URL + '/img/coins/gem2.png',
      decimals: 6,
    },
    {
      token: 'terra1aecddsx0lvmylpzgq9le8uw4apnplhswp44vznecll6ccu044gnqsgcsga',
      symbol: 'FIRE',
      name: 'Phoenix DAO Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/PhoenixDAO.png',
      decimals: 6,
    },
    {
      token:
        'factory/terra1j35ta0llaxcf55auv2cjqau5a7aee6g8fz7md7my7005cvh23jfsaw83dy/ampWHALEt',
      symbol: 'ampWHALEt',
      name: 'ERIS Alliance Staked ampWHALE',
      icon: process.env.CF_PAGES_URL + '/img/coins/ampwhalet.svg',
      decimals: 6,
    },
    {
      token:
        'factory/terra10j3zrymfrkta2pxe0gklc79gu06tqyuy8c3kh6tqdsrrprsjqkrqzfl4df/boneWHALEt',
      symbol: 'boneWHALEt',
      name: 'ERIS Alliance Staked boneWHALE',
      icon: process.env.CF_PAGES_URL + '/img/coins/bonewhalet.svg',
      decimals: 6,
    },
    {
      token:
        'factory/terra1vklefn7n6cchn0u962w3gaszr4vf52wjvd4y95t2sydwpmpdtszsqvk9wy/ampROAR',
      symbol: 'ampROAR',
      name: 'ERIS Amplified ROAR',
      icon: process.env.CF_PAGES_URL + '/img/coins/ampROAR.png',
      decimals: 6,
    },
    {
      token: 'terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
      symbol: 'BITZ',
      name: 'Bitz DAO Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/BitzDAO_Token.png',
      decimals: 6,
    },
    {
      token: 'terra1ctelwayk6t2zu30a8v9kdg3u2gr0slpjdfny5pjp7m3tuquk32ysugyjdg',
      symbol: 'SOL',
      name: 'Solana (Portal)',
      icon: process.env.CF_PAGES_URL + '/img/coins/wSOL.png',
      decimals: 8,
    },
    {
      token: 'terra1xc7ynquupyfcn43sye5pfmnlzjcw2ck9keh0l2w2a4rhjnkp64uq4pr388',
      symbol: 'BNB',
      name: 'Binance Coin (Portal)',
      icon: process.env.CF_PAGES_URL + '/img/coins/wBNB.png',
      decimals: 8,
    },
    {
      token: 'terra1vkf48nr8z84xkg6535qqx9pw0se9hjha9dallv2xpfngn776ksyq0gr7e2',
      symbol: 'TON',
      name: 'Toncoin (Portal)',
      icon: process.env.CF_PAGES_URL + '/img/coins/TON.svg',
      decimals: 8,
    },
    {
      token: 'terra1z2cn5r7p7sezmq5ttwrutvqnczqa9244syd4w2uu2tvjarv68dqqlwx48v',
      symbol: 'DOGE',
      name: 'Dogecoin (Portal)',
      icon: process.env.CF_PAGES_URL + '/img/coins/DOGE.svg',
      decimals: 8,
    },
    {
      token:
        'factory/terra1kkv72sv5zfx539garpych7x5xuq9m9d2a9dnvt863gk3n3g02husc2vxeu/URA',
      symbol: 'URA',
      name: 'URA Utility Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/ura.svg',
      decimals: 6,
    },
    {
      token:
        'terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
      symbol: 'ITO',
      name: 'ITO Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/I.png',
      decimals: 6,
    },
    {
      token:
        'terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
      symbol: 'ARMANI',
      name: 'Chris Armani Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/armani.png',
      decimals: 6,
    },
    {
      token: "terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l",
      name: "seul",
      symbol: "SEUL",
      decimals: 6,
      icon: process.env.CF_PAGES_URL + "/img/coins/seul.png"
    }, {
      token: "terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5",
      name: "xseul",
      symbol: "xSEUL",
      decimals: 6,
      icon: process.env.CF_PAGES_URL + "/img/coins/xseul.png"
    },
    {
      token: "terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu", 
      name: "ADO", 
      symbol: "ADO", 
      decimals: 6, 
      icon: process.env.CF_PAGES_URL + "/img/coins/ADO.png"
    },
    {
      token: "factory/terra186rpfczl7l2kugdsqqedegl4es4hp624phfc7ddy8my02a4e8lgq5rlx7y/ampCAPA",
      name: "ERIS Amplified CAPA",
      symbol: "ampCAPA",
      decimals: 6,
      icons: process.env.CF_PAGES_URL + "/img/coins/ampCapa.svg"
    },
    {
      token: "terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h",
      name: "DNA DAO",
      symbol: "DNA",
      decimals: 6,
      icons: process.env.CF_PAGES_URL + "/img/coins/DNA.png"
    },
    {
      token: 'factory/terra1dndhtdr2v7ca8rrn67chlqw3cl3xhm3m2uxls62vghcg3fsh5tpss5xmcu/MOAR',
      symbol: 'MOAR',
      name: 'ERIS Amplified ampROAR',
      icon: process.env.CF_PAGES_URL + '/img/coins/moar.png',
      decimals: 6,
    },
  ],
}
