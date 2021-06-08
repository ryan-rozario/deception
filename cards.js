//cards of the game

//location crime cards
crime_location = [["Living Room","Bedroom","Storeroom","Bathroom","Kitchen","Balcony"],["Vacation Home","Park","Supermarket","School","Woods","Bank"],["Pub","Bookstore","Restaurant","Hotel","Hospital","Building Site"],["Playground","Classroom","Dormitory","Cafeteria","Elevator","Toilet"]]

//cause of death cards
death_cause = ["Suffocation","Severe Injury","Loss of Blood","Illness/ Disease","Poisoning","Accident"]

//scene tiles
murder_scene_cards = [
    {"Motive of Crime":["Hatred","Power","Money","Love","Jealousy","Justice"]},
    {"Weather":["Sunny","Stormy","Dry","Humid","Cold","Hot"]},
    {"Hint on Corpse":["Head","Chest","Hand","Leg","Partial","All-over"]},
    {"General Impression":["Common","Creative","Fishy","Cruel","Horrible","Suspenseful"]},
    {"Corpse Condition":["Still Warm","Stiff","Decayed","Incomplete","Intact","Twisted"]},
    {"Victim's Identity":["Child","Young Adult","Middle-Aged","Senior","Male","Female"]},
    {"Murderer's Personality":["Arrogant","Despicable","Furious","Greedy","Forceful","Perverted"]},
    {"State of The Scene":["Bits and Pieces","Ashes","Water Stain","Cracked","Disorderly","Tidy"]},
    {"Victim's Build":["Large","Thin","Tall","Short","Disfigured","Fit"]},
    {"Victim's Clothes":["Neat","Untidy","Elegant","Shabby","Bizarre","Naked"]},
    {"Evidence Left Behind":["Natural","Artistic","Written","Synthetic","Personal","Unrelated"]},
    {"Victim's Expression":["Peaceful","Struggling","Frightened","In Pain","Blank","Angry"]},
    {"Time of Death":["Dawn","Morning","Noon","Afternoon","Evening","Midnight"]},
    {"Duration of Crime":["Instanteous","Brief","Gradual","Prolonged","Few Days","Unclear"]},
    {"Trace at the Scene":["Fingerprint","Footprint","Bruise","Blood Stain","Body Fluid","Scar"]},
    {"Noticed by Bystander":["Sudden sound","Prolonged sound","Smell","Visual","Action","Nothing"]},
    {"Social Relationship":["Relatives","Friends","Colleagues","Employer/ Employee","Lovers","Strangers"]},
    {"Victim's Occupation":["Boss","Professional","Worker","Student","Unemployed","Retired"]},
    {"In Progress":["Entertainment","Relaxation","Assembly","Trading","Visit","Dining"]},
    {"Sudden Incident":["Power Failure","Fire","Conflict","Loss of Valuables","Scream","Nothing"]},
    {"Day of Crime":["Weekday","Weekend","Spring","Summer","Autumn","Winter"]},
]

//clues cards or evidence

evidence_cards = ["Air Conditioning","Ants","Antique","Apple","Badge","Bandage","Banknote","Bell","Betting Chips","Blood","Bone","Book","Bracelet","Bread","Briefs","Broom","Bullet","Button","Cake","Calender","Candy","Carton","Cassette Tape","Cat","Certificate","Chalk","Cigar","Cigarette Ash","Cigarette Butt","Cleaning Cloth","Cockroach","Coffee","Coins","Comics","Computer","Computer Disk","Computer Mouse","Confidential Letter","Cosmetic Mask","Cotton","Cup","Curtains","Dentures","Diamond","Diary","Dice","Dictionary","Dirt","Documents","Dog Fur","Dust","Earrings","Eggs","Electric Circuit","Envelope","Exam Paper","Express Courier","Fan","Fax","Fiber Optics","Fingernails","Flashlight","Flip-Flop","Flute","Flyer","Food Ingredients","Gear","Gift","Gloves","Glue","Graffiti","Hair","Hairpin","Handcuffs","Hanger","Hat","Headset","Helmet","Herbal Medicine","High Heel","Hourglass","Ice","ID Card","Ink","Insect","Internet Cable","Invitation Card","IOU Note","Iron","IV Bag","Jacket","Jewelry","Juice","Key","Leaf","Leather Bag","Leather Shoe","Lens","Light Bulb","Lipstick","Lock","Lottery Ticket","Love Letter","Luggage","Lunch Box","Magazine","Mahjong Tiles","Map","Mark","Mask","Maze","Menu","Mirror","Mobile Phone","Model","Mosquito","Mosquito Coil","Nail","Name Card","Necklace","Needle And Thread","Newspaper","Note","Notebook","Numbers","Office Supplies","Oil Painting","Oil Stain","Paint","Panties","Peanut","Perfume","Photograph","Plant","Plastic","Playing Cards","Pocket Watch","Postal Stamp","Powder","Prescription","Puppet","Push Pin","Puzzle","Raincoat","Rat","Receipt","Red Wine","Riddle","Ring","Rose","Rubber Stamp","Sack","Safety Pin","Sand","Sawdust","Seasoning","Signature","Skull","Snacks","Soap","Sock","Soft Drink","Speaker","Specimen","Spider","Spinning Top","Sponge","Spring","Steamed Buns","Stockings","Stuffed Toy","Suit","Sunglasses","Surgical Mask","Surveillance Camera","Switch","Syringe","Table Lamp","Take-Out","Tattoo","Tea Leaves","Telephone","Test Tube","Tie","Timber","Tissue","Tool Box","Toothpicks","Toy","Toy Blocks","Tweezers","Umbrella","Uniform","USB Flash Drive","Vegetables","Video Camera","Violin","Wallet","Watch","Wig"]

means_cards =  ["Alcohol","Amoeba","Arsenic","Arson","Axe","Bamboo Tip","Bat","Belt","Bite And Tear","Blender","Blood Release","Box Cutter","Brick","Bury","Candlestick","Chainsaw","Chemicals","Cleaver","Crutch","Dagger","Dirty Water","Dismember","Drill","Drown","Dumbbell","E-Bike","Electric Baton","Electric Current","Explosives","Folding Chair","Gunpowder","Hammer","Hook","Ice Skates","Illegal Drug","Injection","Kerosene","Kick","Knife And Fork","Lighter","Liquid Drug","Locked Room","Machete","Machine","Mad Dog","Match","Mercury","Metal Chain","Metal Wire","Overdose","Packing Tape","Pesticide","Pill","Pillow","Pistol","Plague","Plastic Bag","Poisonous Gas","Poisonous Needle","Potted Plant","Powder Drug","Punch","Push","Radiation","Razor Blade","Rope","Scarf","Scissors","Sculpture","Smoke","Sniper","Starvation","Steel Tube","Stone","Sulfuric Acid","Surgery","Throat Slit","Towel","Trophy","Trowel","Unarmed","Venomous Scorpion","Venomous Snake","Video Game Console","Virus","Whip","Wine","Wire","Work","Wrench"]


module.exports = {
    crime_location:crime_location,
    death_cause:death_cause,
    murder_scene_cards:murder_scene_cards,
    evidence_cards: evidence_cards,
    means_cards:means_cards
}

//export { crime_location,  death_cause, murder_scene_cards, evidence_cards, means_cards };