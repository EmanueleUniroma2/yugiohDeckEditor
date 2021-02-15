
var CARDS_DB = [
  {
    "Name": "Arrogance Of Orichalcos",
    "Img": "arrogance_of_orichalcos",
    "Stars": 0,
    "Type": "Spell (Quick Play)",
    "Meta": {
        "ATK": 0,
        "DEF": 0,
        "Attribute":"",
        "Effect": 'Pay any multiple of 500 Life Points (max 1500); add 1 “Orichalcos” Spellcaster-Type monster from your Deck to your hand for each 500 Life Points you paid.'
      }
  },
  {
    "Name": "Attack Guidance Barrier",
    "Img": "attack_guidance_barrier",
    "Stars": 0,
    "Type": "Trap",
    "Meta": {
        "ATK": 0,
        "DEF": 0,
        "Attribute":"",
        "Effect": 'This turn you can declare attacks or end the Battle Phase in place of your opponent; this turn your opponent cannot declare attacks or end the Battle Phase.'
      }
  },
  {
    "Name": "Azure-Eyes Silver Dragon",
    "Img": "Azure eyes silver dragon",
    "Stars": 9,
    "Type": "Dragon / Synchro / Effect",
    "Meta": {
        "ATK": 2500,
        "DEF": 3000,
        "Attribute": "LIGHT",
        "Effect": '1 Tuner + 1+ non-Tuner Normal Monsters\nIf this card is Special Summoned: Until the end of the next turn, neither player can target Dragon monsters you currently control with card effects, also they cannot be destroyed by card effects. Once per turn, during your Standby Phase: You can target 1 Normal Monster in your GY; Special Summon it.'
      }
  },
  {
    "Name": "Black Metal Dragon",
    "Img": "black_metal_dragon",
    "Stars": 1,
    "Type": "Dragon / Effect",
    "Meta": {
        "ATK": 600,
        "DEF": 600,
        "Attribute":
        "DARK", "Effect": 'You can target 1 "Red-Eyes" monster you control; equip this monster from your hand or field to that target. It gains 600 ATK. If this card is sent from the field to the GY: You can add 1 "Red-Eyes" card from your Deck to your hand.'
      }
  },
  {
      "Name": "Blue-Eyes Alternative Ultimate Dragon",
      "Img": "Blue eyes alternative ultimate dragon",
      "Stars": 12,
      "Type": "Dragon / Fusion / Effect",
      "Meta": {
          "ATK": 4500,
          "DEF": 3800,
          "Attribute": "LIGHT",
          "Effect": '"Blue-Eyes White Dragon" + "Blue-Eyes White Dragon" + "Blue-Eyes White Dragon"\nYour opponent cannot target or destroy this card with card effects. Once per turn: You can target 1 card your opponent controls; destroy it. If this card was Fusion Summoned using a monster whose original name is "Blue-Eyes Alternative White Dragon" as material, you can target up to 3 cards your opponent controls instead. This card cannot attack the turn this effect is activated.'
      }
  },
  {
      "Name": "Blue-Eyes White Dragon",
      "Img": "Blue eyes white dragon",
      "Stars": 8,
      "Type": "Dragon / Normal",
      "Meta": {
          "ATK": 3000,
          "DEF": 2500,
          "Attribute":
          "LIGHT", "Effect": 'This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.'
      }
  },
  {
      "Name": "Blue-Eyes Abyss Dragon",
      "Img": "Blue-Eyes Abiss Dragon",
      "Stars": 8,
      "Type": "	Dragon / Effect",
      "Meta": {
          "ATK": 2500,
          "DEF": 2500,
          "Attribute": "LIGHT",
          "Effect":'If this card is Special Summoned: You can add 1 Ritual Spell or 1 "Polymerization" from your Deck to your hand. During your End Phase: You can add 1 Level 8 or higher Dragon monster from your Deck to your hand. You can banish this card from your GY; all Level 8 or higher Dragon monsters you control gain 1000 ATK. You can only use each effect of "Blue-Eyes Abyss Dragon" once per turn, and can only activate them while "Blue-Eyes White Dragon" is on your field or in your GY.'
      }
  },
  {
      "Name": "Blue-Eyes Alternative White Dragon",
      "Img": "Blue-Eyes Alternative White Dragon",
      "Stars": 8,
      "Type": "Dragon / Effect",
      "Meta": {
          "ATK": 3000,
          "DEF": 2500,
          "Attribute": "LIGHT",
          "Effect": 'Cannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) by revealing "Blue-Eyes White Dragon" in your hand. You can only Special Summon "Blue-Eyes Alternative White Dragon" once per turn this way. This card\'s name becomes "Blue-Eyes White Dragon" while it is on the field or in the Graveyard. Once per turn: You can target 1 monster your opponent controls; destroy it. This card cannot attack the turn this effect is activated.'
      }
  },
  {
      "Name": "Blue-Eyes Spirit Dragon",
      "Img": "Blue-Eyes Spirit Dragon",
      "Stars": 9,
      "Type": "Dragon / Synchro / Effect",
      "Meta": {
          "ATK": 2500,
          "DEF": 3000,
          "Attribute": "LIGHT",
          "Effect": '1 Tuner + 1 or more non-Tuner "Blue-Eyes" monsters\nNeither player can Special Summon 2 or more monsters at the same time. Once per turn, during either player\'s turn, when an effect of a card in the Graveyard is activated: You can negate the activation. During either player\'s turn: You can Tribute this Synchro Summoned card; Special Summon 1 LIGHT Dragon-Type Synchro Monster from your Extra Deck in Defense Position, except "Blue-Eyes Spirit Dragon", but destroy it during the End Phase of this turn.'
      }
  },
  {
      "Name": "Blue-Eyes Twin Burst Dragon",
      "Img": "Blue-Eyes Twin Burst Dragon",
      "Stars": 10,
      "Type": "Dragon / Fusion / Effect",
      "Meta": {
          "ATK": 3000,
          "DEF": 2500,
          "Attribute": "LIGHT",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "bujinki_ahashima",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "burning_will_for_the_seal",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "call_of_the_orichalcos_servant",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Cards of Consonance",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "cards_of_the_red_stone",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Cyberdark Cannon",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Cyberdark Claw",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Cyberdark Edge",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Cyberdark Horn",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Cyberdark keel",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "darkness_metal_the_dragon_of_dark_steel",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "dark_magician",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Deep eyes white dragon",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "deployment",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "desires",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "divine_basilisk_geh",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Dragon Shrine",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Dragon spirit of white",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "eternal_divine_wrath",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "eternal_soul",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "extravagance",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "fossil_dragon_orichalcos",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Galaxy-Eyes Cipher Blade Dragon",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Galaxy-Eyes Cipher Dragon",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Galaxy-Eyes Full Armor Photon Dragon",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "gizonda_curse_of_the_diferent_dimention",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "impudence_of_orichalcos",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "inferno_fire_blast",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "levonia_the_orichalcos_chaos_prince",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "light_barrier_of_the_stolen_souls",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Linkuriboh",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "mecha_phantom_beast_dracossack",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "metaverse",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "meteor_black_comet_dragon",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "mirror_knight_calling",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "mirror_knight_token",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Mystical space typhoon",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Neo Blue-Eyes Ultimate Dragon",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Number 38 Hope Harbinger Dragon Titanic Galaxy",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Number 46 Dragluon",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "number_11_big_Eye",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "one_day_of_peace",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_ancient_soldier",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_aristeros",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_chimera_blaze",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_deuteros",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_dexia",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_eva",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_gigas",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_golem",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_kiseichu",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_kynerza",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_kyutora",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_last_defender",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_magician",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_magician_apprendice",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_magician_girl",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_magic_stone",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_magnetia",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_malevolence",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_matia",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_mirror",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_punos",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_shunoros",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_talisman_trader",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_tritos",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "orichalcos_true_form",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "placeholder",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Polymerization",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Pot of Desires",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "red_eyes_alternative_black_dragon",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "red_eyes_baby_dragon",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "red_eyes_black_dragon",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "red_eyes_black_dragon_sword",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "red_eyes_burn",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "red_eyes_darkness_metal_dragon",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "red_eyes_dark_dragoon",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "red_eyes_fang_with_chain",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "red_eyes_flare_metal_dragon",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "red_eyes_fusion",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "red_eyes_insight",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "red_eyes_retro_dragon",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "red_eyes_spirit",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "relinquished_anima",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Return of the Dragon Lords",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "return_of_the_red_eyes",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Sage with Eyes of Blue",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "saryuja_skull_dread",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "sealed_sacred_tree",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "sentinel_token",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Shadoll Dragon",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Shooting Riser Dragon",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Silver's Cry",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "sword_of_sealing",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "tenyi_spirit_vishuda",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "terraforming",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Terror of Atlantis",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "The Melody of Awakening Dragon",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "The White Stone of Ancients",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "The White Stone of Legend",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "the_black_stone_of_legend",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "the_claws_of_hermos",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "the_seal_of_orichalcos",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Trade in",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "Union Carrier",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "upstart_goblin",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  },
  {
      "Name": "",
      "Img": "wee_witchs_apprentice",
      "Stars": 0,
      "Type": "",
      "Meta": {
          "ATK": 0,
          "DEF": 0,
          "Attribute": "",
          "Effect": ''
      }
  }
];
