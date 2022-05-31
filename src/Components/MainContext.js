import { useState, createContext } from "react";

export const MainContext = createContext();

export const DataContext = (props) => {
  const [Data, setData] = useState([
    {
      id: "1",
      title: `Pandits: 'Today's Kashmir is more dangerous than the 1990s'`,
      body: `The recent killing of Kashmiri Pandits, has led to widespread protests by members of the community. Two youths, whose families decided to stay put in Kashmir in the ’90s, at the peak of militancy, tell us what this spell of unrest means for them`,
      category: "Tourism",
      date: `May 23, 2022`,
      url: "https://static.toiimg.com/thumb/imgsize-123456,msid-91690113,width-600,resizemode-4/91690113.jpg",
    },
    {
      id: "2",
      title:
        "Italy Tourism Could be Hit as Deadly Bacteria Plagues Millions of Olive Trees",
      body: `If you are planning to visit Italy and are inspired by its stunning olive tree orchards, you may be in for some disappointment. The picturesque olive trees of Italy have been plagued with a bacterium which is causing their destruction.`,
      category: "Tourism",
      date: `May 23, 2022`,
      url: "https://static.toiimg.com/thumb/imgsize-92218,msid-91872314,width-400,resizemode-4/91872314.jpg",
    },
    {
      id: "3",
      title:
        "Sidhu Moose Wala shot dead LIVE UPDATES: Singer cremated at his native village; fans, friends, family, and everyone who loved him paid their last tribute",
      body: `Noted Punjabi singer Sidhu Moose Wala, who had joined the Congress before the Punjab elections, was killed by gangsters in an attack near his ancestral village Jawaharke in district Mansa, Punjab on Sunday. The incident happened within 24 hours after his security was withdrawn by the Punjab government. More than 30 rounds were fired on the vehicle he was travelling in. Police said Sidhu appeared to have sustained more than eight bullet injuries and was taken to the Mansa civil hospital where he passed away. The 27 years old was on the radar of gangsters for a long time. Six people have reportedly been detained in connection with the murder. Sidhu's father has demanded the probe through a sitting judge of the high court, handing over investigations to CBI or NIA. Also demanded to fix the responsibility of officers who leaked letters about the withdrawal of security. Now the CM has agreed to all the demands. Today the last rites of the singer will be held at 12pm, for which his mortal remains have been brought home. Fans and admirers gather outside Sidhu Moose Wala's haveli to pay their final tribute. The father and mother of the singer can't hold back their tears at the funeral. The singer has been cremated and all his loved ones have paid their tribute.`,
      category: "Tourism",
      date: `May 23, 2022`,
      url: "https://images.news18.com/ibnlive/uploads/2022/03/eiffel-tower-16480407043x2.jpg?impolicy=website&width=510&height=356",
    },
    {
      id: "4",
      title:
        "Explained: Why the Ukraine conflict spells trouble for tourism in Thailand and Vietnam",
      body: `In pre-pandemic times, most foreign visitors to Phan Thiet, a city in southern Vietnam that is affectionately known as "Little Moscow," were Russian. Not too far away in Nha Trang, the capital of Khanh Hoa province, restaurant menus are translated in Russian and Mandarin. At beachside resorts, Russian food dominates the buffets. Tour agencies have popped up to cater only to Russians. This is partly a result of history.`,
      category: "Tourism",
      date: `May 23, 2022`,
      url: "https://static.toiimg.com/thumb/msid-86574760,imgsize-19922,width-400,resizemode-4/86574760.jpg",
    },
    {
      id: "5",
      title: "Spiritual tourism picks up as restrictions end",
      body: `As places of worship across the country open up, hotels and travel companies are upbeat about the return of business from spiritual tourism.Demand for travel is rising for destinations like Shirdi, Vrindavan, Ajmer and Bodh Gaya, among others, as pilgrims lock dates to visit temples and religious cities.`,
      category: "Tourism",
      date: `May 23, 2022`,
      url: "https://images.livemint.com/img/2022/03/22/600x338/Shirdi_1579406957579_1647944036952.jpg",
    },
    {
      id: "1",
      title: `Clash of the titans: Nadal faces Djokovic in French Open quarter-final`,
      body: `"I haven't played this kind of match for the last three months," Nadal said. "He (Djokovic) won his last nine matches, winning in Rome and now winning here in straight sets every match. He will be confident." "I know how my situation is and I accept it. I'm gonna fight," he said. "I'm in the quarterfinals of Roland Garros. Two-weeks-and-a-half ago, I didn't know if I would be here. And to be honest, every match I play here, I don't know if it's gonna be my last match in Roland Garros, in my tennis career. That's my situation now."`,
      category: "Fitness",
      date: `May 23, 2022`,
      url: "https://static.toiimg.com/thumb/msid-91905087,imgsize-42234,width-400,resizemode-4/91905087.jpg",
    },
    {
      id: "2",
      title: `Samantha Ruth Prabhu Inspires Fans Towards Fitness In New Workout Post; 'you Got This'`,
      body: `Actor Samantha Ruth Prabhu kick-started Wednesday by giving major fitness goals to her fandom. The Ye Maaya Chesave star enjoyed 'abs day' at the gym today, and while doing so, she took to Instagram to share a workout photo of herself, thereby motivating fans towards a healthy lifestyle. The South diva, who is also well-known for sharing empowering quotes and messages online, further detailed the strength of a tiny spark that can ignite a burning passion in one's life.`,
      category: "Fitness",
      date: `May 23, 2022`,
      url: `https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/h73agtxrsrwsxnou_1648020588.jpeg`,
    },
    {
      id: "3",
      title: `THE BEST FITNESS TRACKERS TO BUY RIGHT NOW`,
      body: `FitnessFitness trackers have come a long way from the simple bands that tracked steps and little else. Modern trackers can monitor everything from your heart health to how well you’ve recovered from a hard bout of training. They’ve got sensors galore and, in some cases, can give smartwatches a run for their money. Whatever your fitness goals are, there’s probably a fitness tracker that can help you achieve them.`,
      category: "Fitness",
      date: `May 23, 2022`,
      url: `https://cdn.vox-cdn.com/thumbor/S0Gcw61259ypmt21bOKZFoHExEA=/0x0:2040x1360/1570x883/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70657032/acastro_220321_5092_0001.0.jpg`,
    },
    {
      id: "4",
      title: `Champions League final: Liverpool chairman demands apology from French sports minister`,
      body: `LONDON: Liverpool chairman Tom Werner has demanded an apology from French sports minister Amelie Oudea-Castera over the treatment of the club's fans at Saturday's Champions League final in Paris. Werner, part of the US-based Fenway Sports Group that owns Liverpool, said in a leaked letter sent to the minister on Monday that he was left in "utter disbelief" at her comments about the chaos.`,
      category: "Fitness",
      date: `May 23, 2022`,
      url: `https://static.toiimg.com/thumb/msid-91913450,imgsize-42624,width-400,resizemode-4/91913450.jpg`,
    },
    {
      id: "5",
      title: `American Pegula fights back to reach French Open last eight`,
      body: `T came back from a set down to beat Romania's Irina-Camelia Begu and reach her second straight.American 11th seed Pegula battled to a 4-6, 6-2, 6-3 victory to set up a meeting with either world number one Iga Swiatek or Chinese youngster Zheng Qinwen.Pegula has enjoyed a strong season, having also reached the Australian Open quarter-finals and finished runner-up at the Madrid Open.`,
      category: "Fitness",
      date: `May 23, 2022`,
      url: `https://static.toiimg.com/thumb/msid-91897782,imgsize-37550,width-400,resizemode-4/91897782.jpg`,
    },
    {
      id: "1",
      title: `'Work harder, you’ve to do better' pushed me into depression`,
      body: `In a LinkedIn post some weeks ago, Gurprriet Siingh, managing director, leadership and succession at Russell Reynolds India, an executive search and leadership advisory firm, talked about the “anxious and sleepless nights” he experienced following a job change. “...work-related stress pushed me into depression and PTSD [post traumatic stress disorder]. It took me several years to recover from that period of my life,”`,
      category: `Technology`,
      date: `May 23, 2022`,
      url: `https://static.toiimg.com/thumb/imgsize-123456,msid-91893131,width-300,resizemode-4/91893131.jpg`,
    },
    {
      id: "2",
      title: `Nations scramble to take a lead in 6G technology`,
      body: `As 6G, the next-generation communication technology, is widely expected to achieve commercialization around 2030, various nations are ramping up research and development efforts, despite the absence of clear technical routes or unified international standards.`,
      category: `Technology`,
      date: `May 23, 2022`,
      url: `https://www.globaltimes.cn/Portals/0/attachment/2022/2022-03-07/10abb44c-70a7-439e-8580-57c483ce263c.jpeg`,
    },
    {
      id: "3",
      title: `Rs 1,066 cr spent in last 5 years for innovation of environmentally sustainable technology`,
      body: `The government on Wednesday said Rs 1,086 crore has been allocated in the last five years for innovation of environmentally sustainable technology of which Rs 1,066 crore has been spent. Responding to a question in Lok Sabha, Minister of State (Independent charge) Dr Jitendra Singh said a total of Rs 31.21 crore have been allocated for start-ups and NGOs working for research and development for innovation of environmentally sustainable technology in the last three years.`,
      category: `Technology`,
      date: `May 23, 2022`,
      url: `https://img.etimg.com/thumb/msid-90397029,width-300,imgsize-45248,,resizemode-4,quality-100/jitendra-singh-ani.jpg`,
    },
    {
      id: "4",
      title: `For a road out of China for technology companies, India may be a viable option`,
      body: `Global electronics suppliers looking to diversify their manufacturing footprint beyond China are taking advantage of growing demand for sophisticated components used in electric vehicles to shift production closer to their customers overseas. It’s a smart move that could allay fears that the supply chain is too dependent on one location amid shortages and geopolitical tensions.`,
      category: `Technology`,
      date: `May 23, 2022`,
      url: `https://img.etimg.com/thumb/msid-90344799,width-300,imgsize-117254,,resizemode-4,quality-100/istock-166107706-1.jpg`,
    },
    {
      id: "5",
      title: `Asian shares rise after Wall Street rally led by technology companies`,
      body: `Asian shares rose Wednesday, following a rally on Wall Street led by technology companies, although investors remain concerned about the war in Ukraine and inflation. Benchmarks were higher across the Asian region, despite worries about rising energy costs. Oil prices rose, while the dollar gained against the Japanese yen.`,
      category: `Technology`,
      date: `May 23, 2022`,
      url: `https://images.newindianexpress.com/uploads/user/imagelibrary/2022/3/23/w900X450/WALLSTREET.jpg?w=640&dpr=1.0`,
    },
    {
      id: "1",
      title: "Vivian Dsena is happy to see ‘Graceful 6 Years Of Shakti’ trending; shares his favourite scene from the show",
      body: `Just Packed up and Was delighted To See The Hype & Trend For (Graceful 6 Years Of Shakti)... Never did I think that Shakti would be what it is today, This was only possible coz of you guys. We have some memories to cherish on this occasion of completing 6years and many more to come. As we’re all celebrating This Iconic Show, let me share a secret I never revealed before that my favourite track in the show was "Jolly n Khushi" track especially the comedy between them… Thanks for being loyal and supportive, in the world where loyalty changes by just a blow of the wind… Loads of Love.`,
      category: "Bollywood",
      date: "May 23, 2022",
      url: "https://static.toiimg.com/thumb/msid-91906188,imgsize-41652,width-800,height-600,resizemode-75/91906188.jpg",
    },
    {
      id: "2",
      title:"My mom wants to see me daily on TV: Anmol Kajani",
      body: `Anmol Kajani, who has been part of the film Gangubai Kathiawadi, and done a few web shows, is now all set to make his TV debut. Talking about how he bagged a role in the upcoming show Apanapan, he says, “I got a call from the production house and they wanted to see my earlier auditions. I sent them my audition clips in February and bagged the role. My character named Badal is a mumma’s boy and he helps her out in a cafe.”
      Anmol says that he never wanted to do a TV show and it was his mother who encouraged him. “I wasn’t interested in doing a daily soap because I’ve never watched them, barring one or two. Even before this, I had been offered daily soaps, but I never took them up. However, the story of Apanapan was good and my mother was very keen, so I took it up. My mom wants to see me daily on television!” he says.`,
      category: "Bollywood",
      date: "May 23, 2022",
      url: "https://static.toiimg.com/thumb/msid-91893622,imgsize-115774,width-800,height-600,resizemode-75/91893622.jpg",
    },
    {
      id: "3",
      title:
        "‘Bhool Bhulaiyaa 2’ box office collection: Kartik Aaryan’s horror drama scores a total of Rs 119 crore at the end of second weekend",
      body: `‘Bhool Bhulaiyaa 2’ has observed a drop in collection in its second weekend but has managed to enter the coveted 100 crore club. The movie recorded a drop of 45 per cent from last week and added Rs 30 crore nett to its total, reports Boxofficeindia. The film recorded a good score on its second Saturday, but dropped on Sunday because of a cricket tournament. New releases this week, like ‘Anek’ and ‘Top Gun: Maverick’ have faced a dull response at the box office, with only ‘Bhool Bhulaiyaa 2’ managing to triumph.
      Having entered the 100 crore club, with a total collection of Rs 120 crore nett, ‘Bhool Bhulaiyaa 2’ is expected to comfortably cross the 150 crore nett mark soon. This horror drama is expected to beat the collection of ‘Gangubai Kathiawadi’ in the coming days and will also score over the lifetime figures of ‘Sooryavanshi’ in East Punjab and Delhi / UP circuit. Directed by Anees Bazmee, ‘Bhool Bhulaiyaa 2’ also features Kiara Advani and Tabu in pivotal roles.`,
      category: "Bollywood",
      date: "May 23, 2022",
      url: "https://static.toiimg.com/thumb/msid-91885360,imgsize-29234,width-800,height-600,resizemode-75/91885360.jpg",
    },
    {
      id: "4",
      title:"Karan Tacker tests COVID positive; says 'I dodged the virus for 2 years, but it turned out to be dheet…”",
      body: `The widespread Coronavirus' impact may have waned in previous months, but the virus has resurfaced. COVID-19 cases are on the rise again, and some celebrities have been infected. One of them is actor Karan Tacker, who informed his fans that he has tested COVID positive. The Ek Hazaaron Mein Meri Behna Hai actor revealed that he had prevented it for the past two years, but it finally got the best of him, and he urged people not to underestimate this virus. He posted a story on Instagram and said “I dodged the virus for good two years, but this COVID turned out to be a dheet, finally got the best of me and attacked me on my peeth, the coughing and sneezing make me skip heartbeats, but the aches and the chills makes me realize i am a mortal like any other deadbeat, so wear a mask, don’t try to cheat, vaccine, booster, mask, repeat.”.`,
      category: "Bollywood",
      date: "May 23, 2022",
      url: "https://static.toiimg.com/thumb/msid-91916008,width-800,height-600,resizemode-75,imgsize-51804,pt-32,y_pad-40/91916008.jpg",
    },
    {
      id: "5",
      title:
        "Ananya Panday hopes Bollywood doesn't make any more remakes: 'I don't really want to see more...'",
      body: `Ananya Panday is basking in the success of her last release Gehraiyaan these days. The film, which released on Amazon Prime Video last month, was well received by critics even if it had polarising reviews from the viewers. In her short career, Ananya has already worked in one remake - Pati, Patni Aur Woh - but the actor is hoping that is the extent of remakes for her career for now. In a recent interview, the actor said she is hoping the trend of remakes in Bollywood dies down.`,
      category: "Bollywood",
      date: "May 23, 2022",
      url: "https://images.hindustantimes.com/img/2022/03/20/550x309/274635195_1624629087897558_2660029837697677746_n_1646107399531_1647762602095.jpg",
    },
    {
      id: "1",
      title: `Food Tips: 5 Foods to Help You Sleep Through The Night`,
      body: `People who fall sick often mostly do not follow a healthy sleeping pattern. With a healthy sleep pattern, the risk of having heart diseases, diabetes and obesity decreases. With a good night’s sleep, you can make better decisions at home and work. It is important that you eat healthy and have a solid sleep at night`,
      category: "Food",
      date: `May 23, 2022`,
      url: `https://static.india.com/wp-content/uploads/2022/03/pjimage-2022-03-21T161929.868.jpg?impolicy=Medium_Widthonly&w=700&h=467`,
    },
    {
      id: "2",
      title: `Try This Recipe For Lip-Smacking Chicken Schezwan at Home`,
      body: `You must be aware of the health benefits of turmeric. It is not just needed for your immunity but can even help you detox your body to get healthier in the longer run. It is even used in various skincare DIY mixes that can help you get glowing skin without stepping out of your home. Curcumin extracts in raw and organic turmeric can even help you improve your joint health and eliminate the risk of pain. So, going for a pack of organic turmeric is never a bad idea for your health.`,
      category: "Food",
      date: `May 23, 2022`,
      url: `https://static.toiimg.com/thumb/imgsize-212964,msid-87999263,width-450,resizemode-4/87999263.jpg`,
    },
    {
      id: "3",
      title: `Vocal For Local: Gujarat Food Vendor Makes, Sells Pizza In 'Kulhad'`,
      body: `When it comes to street foods, let's agree, there's enough room for experimentation. If you look around, you will find a countless number of examples where regular, classic food items are given unique (bizarre at times) makeover. Be it Maggi filled golgappa or gulab jamun stuffed paratha, today every second person is trying to do something out-of-the-box for their patrons. While some experiments turn out to be a hit, some draw flaks and criticism. Here is a list of some of the top choices in organic turmeric that you can buy online. Go for the perfect pack of organic turmeric to focus on your health and improve your immunity in a few days. `,
      category: "Food",
      date: `May 23, 2022`,
      url: `https://c.ndtvimg.com/2022-02/rtae3o0o_onion-rings_625x300_24_February_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350`,
    },
    {
      id: "4",
      title: `Avoid These Food Items to Prevent Bad Breath, and Some Tips for Oral Care`,
      body: `Dental hygiene is an important thing that must be focused on while grooming yourself. Bad breath can be the reason why people avoid you or make a conversation with you. Bad breath or ‘halitosis’ can make a bad impression, but do not worry, there are certain foods to avoid and tips to keep bad breath at bay.`,
      category: "Food",
      date: `May 23, 2022`,
      url: `https://images.news18.com/ibnlive/uploads/2021/11/brushing-teeth-16464469473x2.jpg?impolicy=website&width=510&height=356`,
    },
    {
      id: "5",
      title: `Burmese Samosa Curry Is A Famous Burmese Street Food That Might Be A Hit With Desi Foodies`,
      body: `How many times do you look at a samosa and think to yourself, 'I don't want to eat that?' Almost never, right? Because we Indians love samosa in every available variation, even the latest fusion ones! With delicious and unique varieties of samosa ranging throughout the county, it is truly the peak of Indian cuisines and its worldwide popularity proves just that. However, did you know that apart from western countries being a fan of the spicy and tantalising samosa, there is another neighbouring country that has adapted samosa as its own? We are talking about Myanmar and its famous street food called - Samusa Thouk or Burmese Samosa Curry.`,
      category: "Food",
      date: `May 23, 2022`,
      url: `https://c.ndtvimg.com/2022-03/fhteoeig_burmese-samosa-curry_625x300_23_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350`,
    },
  ]);

  return (
    <>
      <MainContext.Provider value={[Data, setData]}>
        {props.children}
      </MainContext.Provider>
    </>
  );
};
