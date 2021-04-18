let comics = [
  [1880, 04, "Beadle's Dime New York Library",              "Vol. 008 | No. 092", "https://archive.org/download/cu31924022053395/cu31924022053395.pdf",],
  [1882, 07, "Morrison's Sensational Series",               "Vol. 001 | No. 046", "https://archive.org/download/cu31924022004489/cu31924022004489.pdf", "https://archive.org/download/cu31924022004489/cu31924022004489_jp2.zip/cu31924022004489_jp2%2Fcu31924022004489_0002.jp2&ext=jpg"],
  [1888, 11, "Saturday Library",                            "Vol. 002 | No. 152", "https://archive.org/download/cu31924022008860/cu31924022008860.pdf",],
  [1890, 00, "O'er Land and Sea",                           "Vol. 000 | No. 001", "https://archive.org/download/the-aldine-oer-land-and-sea-library-001-1890/The%20Aldine%20%27%27O%27er%20Land%20And%20Sea%27%27%20Library%20%23001%20%5B1890%5D.pdf",],
  [1890, 08, "Leather-Clad Tales of Adventure and Romance", "Vol. 000 | No. 038", "https://archive.org/download/leather-clad-tales-of-adventure-and-romance-no.-38-1890-08-23/Leather-Clad%20Tales%20Of%20Adventure%20And%20Romance%20No.%2038%20%5B1890-08-23%5D.pdf",],
  [1891, 02, "Beadle's Popular Library",                    "Vol. 002 | No. 048", "https://archive.org/download/cu31924022228716/cu31924022228716.pdf",],
  [1892, 00, "O'er Land and Sea",                           "Vol. 000 | No. 094", "https://archive.org/download/the-aldine-oer-land-and-sea-library-094-1892/The%20Aldine%20%27%27O%27er%20Land%20And%20Sea%27%27%20Library%20%23094%20%5B1892%5D.pdf",],
  [1896, 03, "Diamond Dick Library",                        "Vol. 000 | No. 175", "https://archive.org/download/cu31924022189348/cu31924022189348.pdf",],
  [1896, 07, "Diamond Dick Library",                        "Vol. 000 | No. 192", "https://archive.org/download/cu31924022189330/cu31924022189330.pdf",],
  [1898, 10, "Diamond Dick Jr.",                            "Vol. 000 | No. 104", "https://archive.org/download/cu31924022024768/cu31924022024768.pdf", "https://archive.org/download/cu31924022024768/cu31924022024768_jp2.zip/cu31924022024768_jp2%2Fcu31924022024768_0002.jp2&ext=jpg"],
  [1908, 05, "Nick Carter Weekly",                          "Vol. 000 | No. 592", "https://archive.org/download/nick-carter-weekly-n-592-1908-05-02/Nick%20Carter%20Weekly%20n592%20%5B1908-05-02%5D.pdf",],
  [1916, 04, "Short Stories",                               "Vol. 000 | No. 000", "https://archive.org/download/shs_1916_04/shs_1916_04.pdf", "https://archive.org/download/shs_1916_04/shs_1916_04_jp2.zip/shs_1916_04_jp2%2Fshs_1916_04_0000.jp2&ext=jpg"],
  [1922, 11, "Western Story Magazine",                      "Vol. 030 | No. 004", "https://archive.org/download/wsm_1922_11_25/wsm_1922_11_25.pdf", "https://archive.org/download/wsm_1922_11_25/wsm_1922_11_25_jp2.zip/wsm_1922_11_25_jp2%2Fwsm_1922_11_25_0000.jp2&ext=jpg"],
  [1923, 10, "Short Stories",                               "Vol. 000 | No. 000", "https://archive.org/download/ShortStoriesUK19231001/Short%20Stories%20%28UK%29%20%5B1923-10-01%5D.pdf",],
  [1923, 12, "Short Stories",                               "Vol. 105 | No. 005", "https://archive.org/download/short-stories-v-105-n-05-1923-12-10/Short%20Stories%20v105%20n05%20%5B1923-12-10%5D.pdf",],
  [1924, 07, "Short Stories",                               "Vol. 108 | No. 001", "https://archive.org/download/ShortStoriesV108N0119240710/Short%20Stories%20v108%20n01%20%5B1924-07-10%5D%20%28sas%29.pdf", "https://archive.org/download/ShortStoriesV108N0119240710/Short%20Stories%20v108%20n01%20%5B1924-07-10%5D%20%28sas%29_jp2.zip/Short%20Stories%20v108%20n01%20%5B1924-07-10%5D%20%28sas%29_jp2%2FShort%20Stories%20v108%20n01%20%5B1924-07-10%5D%20%28sas%29_0000.jp2&ext=jpg"],
  [1925, 06, "Short Stories",                               "Vol. 111 | No. 005", "https://archive.org/download/ShortStoriesV111N0519250610/Short%20Stories%20v111%20n05%20%5B1925-06-10%5D.pdf",],
  [1926, 05, "Frontier Stories",                            "Vol. 004 | No. 002", "https://archive.org/download/1926-05-frontier-stories-v-004n-002/1926-05%20Frontier%20Stories%20v004n002.pdf", "https://archive.org/download/1926-05-frontier-stories-v-004n-002/1926-05%20Frontier%20Stories%20v004n002_jp2.zip/1926-05%20Frontier%20Stories%20v004n002_jp2%2F1926-05%20Frontier%20Stories%20v004n002_0000.jp2&ext=jpg"],
  [1926, 06, "Western Story Magazine",                      "Vol. 061 | No. 002", "https://archive.org/download/wsm_1926_06_05/wsm_1926_06_05.pdf",],
  [1926, 08, "Short Stories",                               "Vol. 116 | No. 003", "https://archive.org/download/short_stories_august_10_1926/short_stories_august_10_1926.pdf",],
  [1927, 05, "Frontier Stories",                            "Vol. 006 | No. 002", "https://archive.org/download/frontier_stories_may_1927/frontier_stories_may_1927.pdf", "https://archive.org/download/frontier_stories_may_1927/frontier_stories_may_1927_jp2.zip/frontier_stories_may_1927_jp2%2Ffrontier_stories_may_1927_0000.jp2&ext=jpg"],
  [1929, 10, "Frontier Stories",                            "Vol. 010 | No. 006", "https://archive.org/download/FrontierStoriesV10N06192910/Frontier%20Stories%20v10%20n06%20%5B1929-10%5D.pdf",],
  [1931, 12, "Western Story Magazine",                      "Vol. 109 | No. 004", "https://archive.org/download/WesternStoryV109V0419311226P13334/Western%20Story%20v109%20v04%20%5B1931-12-26%5D%20%7B-p133-34%7D.pdf",],
  [1932, 07, "Western Story Magazine",                      "Vol. 114 | No. 005", "https://archive.org/download/western-story-v-114-n-05-1932-07-30/Western%20Story%20v114%20n05%20%5B1932-07-30%5D.pdf",],
  [1932, 08, "Railroad Stories",                            "Vol. 009 | No. 001", "https://archive.org/download/railroad-stories-v-09-n-01-1932-08_202011/Railroad%20Stories%20v09%20n01%20%5B1932-08%5D.pdf",],
  [1942, 09, "Action Stories",                              "Vol. 012 | No. 001", "https://archive.org/download/ActionStories193209URFATLPM/Action%20Stories%20-%201932-09%20%5BURF-AT-LPM%5D.pdf",],
  [1932, 10, "Railroad Stories",                            "Vol. 009 | No. 003", "https://archive.org/download/railroad-stories-v-09-n-03-1932-10_202011/Railroad%20Stories%20v09%20n03%20%5B1932-10%5D.pdf",],
  [1933, 04, "Ranch Romances",                              "Vol. 047 | No. 004", "https://archive.org/download/RanchRomancesV47n04Apr1933cmbEXciter/Ranch%20Romances%20v47n04%20%28Apr%201933%29%20%7Bcmb-EXciter%7D.pdf",],
  [1933, 09, "Ranch Romances",                              "Vol. 050 | No. 001", "https://archive.org/download/rr_1933_09_01/rr_1933_09_01.pdf", "https://archive.org/download/rr_1933_09_01/rr_1933_09_01_jp2.zip/rr_1933_09_01_jp2%2Frr_1933_09_01_0000.jp2&ext=jpg"],
  [1933, 11, "Railroad Stories",                            "Vol. 012 | No. 004", "https://archive.org/download/RailroadStoriesV12N04193311/Railroad%20Stories%20v12%20n04%20%5B1933-11%5D.pdf",],
  [1934, 05, "Railroad Stories",                            "Vol. 014 | No. 002", "https://archive.org/download/Railroad_Stories_v14n02_1934-05.Munsey/Railroad%20Stories%20v14n02%20%281934-05.Munsey%29.pdf",],
  [1934, 06, "Railroad Stories",                            "Vol. 014 | No. 003", "https://archive.org/download/railroad-stories-v-14-n-03-1934-06_202011/Railroad%20Stories%20v14%20n03%20%5B1934-06%5D.pdf",],
  [1934, 08, "Cowboy Stories",                              "Vol. 026 | No. 004", "https://archive.org/download/hank-pays-a-debt/Hank_Pays_a_Debt.pdf", "http://www.philsp.com/data/images/c/cowboy_stories_193410.jpg"],
  [1934, 11, "Railroad Stories",                            "Vol. 015 | No. 004", "https://archive.org/download/rrs193411/RRS_1934_11.pdf",],
  [1935, 02, "Cowboy Stories",                              "Vol. 027 | No. 002", "https://archive.org/download/murder-for-sale/Murder_for_Sale.pdf", "http://www.philsp.com/data/images/c/cowboy_stories_193502.jpg"],
  [1935, 02, "Railroad Stories",                            "Vol. 016 | No. 003", "https://archive.org/download/railroad-stories-v-16n-03-1935-02.-munsey-c-2c-ufikus-dpp/Railroad%20Stories%20v16n03%201935-02.Munsey%20c2c%20ufikus-DPP%20.pdf",],
  [1935, 03, "Cowboy Stories",                              "Vol. 027 | No. 003", "https://archive.org/download/cowboy-stories-v-27-n-03-1935-03/Cowboy%20Stories%20v27%20n03%20%5B1935-03%5D.pdf",],
  [1935, 04, "Cowboy Stories",                              "Vol. 027 | No. 004", "https://archive.org/download/red-sheep/Red_Sheep.pdf", "http://www.philsp.com/data/images/c/cowboy_stories_193504.jpg"],
  [1935, 04, "Railroad Stories",                            "Vol. 017 | No. 001", "https://archive.org/download/Railroad_Stories_v17n01_1935-04_153_pages_Ufikus-Teachbug/Railroad%20Stories%20v17n01%20%281935-04%29%20%28153%20pages%29%20%28Ufikus-Teachbug%29.pdf", "https://archive.org/download/Railroad_Stories_v17n01_1935-04_153_pages_Ufikus-Teachbug/Railroad%20Stories%20v17n01%20%281935-04%29%20%28153%20pages%29%20%28Ufikus-Teachbug%29_jp2.zip/Railroad%20Stories%20v17n01%20%281935-04%29%20%28153%20pages%29%20%28Ufikus-Teachbug%29_jp2%2FRailroad%20Stories%20v17n01%20%281935-04%29%20%28153%20pages%29%20%28Ufikus-Teachbug%29_0000.jp2&ext=jpg"],
  [1936, 01, "Thrilling Western",                           "Vol. 008 | No. 001", "https://archive.org/download/ThrillingWesternV08n01193601/ThrillingWesternV08n011936-01-ifcIbc.pdf",],
  [1936, 02, "Pete Rice Western Adventures",                "Vol. 005 | No. 004", "https://archive.org/download/pete-rice-western-adventures-v-05-n-04-1936-02/Pete%20Rice%20Western%20Adventures%20v05%20n04%20%5B1936-02%5D.pdf",],
  [1936, 04, "Railroad Stories",                            "Vol. 019 | No. 005", "https://archive.org/download/Railroad_Stories_v19n05_Munsey_Apr_1936_ufikus-DPP/Railroad%20Stories%20v19n05%20Munsey%20%28Apr%201936%29%20%28ufikus-DPP%29.pdf", "https://archive.org/download/Railroad_Stories_v19n05_Munsey_Apr_1936_ufikus-DPP/Railroad%20Stories%20v19n05%20Munsey%20%28Apr%201936%29%20%28ufikus-DPP%29_jp2.zip/Railroad%20Stories%20v19n05%20Munsey%20%28Apr%201936%29%20%28ufikus-DPP%29_jp2%2FRailroad%20Stories%20v19n05%20Munsey%20%28Apr%201936%29%20%28ufikus-DPP%29_0000.jp2&ext=jpg"],
  [1934, 01, "Western Story Magazine",                      "Vol. 127 | No. 005", "https://archive.org/download/westernstoryv127n0519340127/Western%20Story%20v127%20n05%20%5B1934-01-27%5D.pdf",],
  [1934, 05, "Western Story Magazine",                      "Vol. 080 | No. 002", "https://archive.org/download/1934-05-western-story-magazine-v080n002/1934-05%20Western%20Story%20Magazine%20v080n002.pdf", "https://archive.org/download/1934-05-western-story-magazine-v080n002/1934-05%20Western%20Story%20Magazine%20v080n002_jp2.zip/1934-05%20Western%20Story%20Magazine%20v080n002_jp2%2F1934-05%20Western%20Story%20Magazine%20v080n002_0000.jp2&ext=jpg"],
  [1934, 10, "Thrilling Western",                           "Vol. 003 | No. 001", "https://archive.org/download/thrilling-western-v-03-n-01-1934-10_202011/Thrilling%20Western%20v03%20n01%20%5B1934-10%5D.pdf"],
  [1934, 12, "Thrilling Western",                           "Vol. 003 | No. 003", "https://archive.org/download/ThrillingWesternV03n03193412/Thrilling%20Western%20v03n03%20%281934-12%29.pdf"],
  [1935, 01, "Thrilling Western",                           "Vol. 004 | No. 001", "https://archive.org/download/ThrillingWesternV04n01193501ATLPMUrf/Thrilling%20Western%20v04n01%20%281935-01%29%20%5BATLPM-Urf%5D.pdf",],
  [1935, 07, "Thrilling Western",                           "Vol. 006 | No. 001", "https://archive.org/download/ThrillingWesternV06n01193507ATLPMUrf_201901/Thrilling%20Western%20v06n01%20%281935-07%29%20%5BATLPM-Urf%5D.pdf",],
  [1935, 07, "Western Story Magazine",                      "Vol. 140 | No. 003", "https://archive.org/download/WesternStoryV140N0319350713/WesternStoryV140N031935-07-13.pdf",],
  [1935, 09, "Thrilling Western",                           "Vol. 006 | No. 003", "https://archive.org/download/ThrillingWesternV06n03193509ATLPMUrf/Thrilling%20Western%20v06n03%20%281935-09%29%20ATLPM-Urf.pdf",],
  [1935, 10, "Thrilling Western",                           "Vol. 007 | No. 001", "https://archive.org/download/ThrillingWesternV07n01193510ATLPMUrf/Thrilling%20Western%20v07n01%20%281935-10%29%20ATLPM-Urf.pdf",],
  [1935, 11, "Short Stories",                               "Vol. 153 | No. 003", "https://archive.org/download/ShortStoriesV153N0319351110/Short%20Stories%20v153%20n03%20%5B1935-11-10%5D.pdf",],
  [1936, 02, "Short Stories",                               "Vol. 154 | No. 004", "https://archive.org/download/ShortStoriesV154N0419360225ibcBc/Short%20Stories%20v154%20n04%20%281936-02-25%29%20%28ibc%20-bc%29.pdf",],
  [1936, 06, "Western Novel and Short Stories",             "Vol. 005 | No. 001", "https://archive.org/download/WesternNovelAndShortStoriesV05N01193606/WesternNovelAndShortStoriesV05N011936-06.pdf",],
  [1937, 04, "Western Action Novels",                       "Vol. 003 | No. 002", "https://archive.org/download/WesternActionNovelsV03N02193704/Western%20Action%20Novels%20v03%20n02%20%5B1937-04%5D.pdf",],
  [1937, 09, "Thrilling Adventures",                        "Vol. 023 | No. 001", "https://archive.org/download/thrilling-adventures-v-23-n-01-1937-09-missing-ifc/Thrilling%20Adventures%20v23%20n01%20%5B1937-09%5D%20missing%20ifc.pdf",],
  [1937, 09, "Western Story Magazine",                      "Vol. 159 | No. 004", "https://archive.org/download/WesternStoryV159N0419370925/Western%20Story%20v159%20n04%20%281937-09-25%29.pdf",],
  [1937, 10, "Red Seal Western",                            "Vol. 005 | No. 004", "https://archive.org/download/red-seal-western-v-05-n-04-1937-10-missing-covers/Red%20Seal%20Western%20v05%20n04%20%5B1937-10%5D%20missing%20covers.pdf",],
  [1937, 10, "Western Story Magazine",                      "Vol. 160 | No. 002", "https://archive.org/download/WesternStoryV160N0219371023/Western%20Story%20v160%20n02%20%281937-10-23%29.pdf",],
  [1938, 01, "Western Story Magazine",                      "Vol. 161 | No. 006", "https://archive.org/download/westernstoryv161n0619380101/Western%20Story%20v161%20n06%20%281938-01-01%29.pdf",],
  [1938, 02, "Western Story Magazine",                      "Vol. 163 | No. 002", "https://archive.org/download/westernstoryv163n0219380226/Western%20Story%20v163%20n02%20%281938-02-26%29.pdf",],
  [1938, 03, "Famous Western",                              "Vol. 002 | No. 001", "https://archive.org/download/FamousWesternV02n01193803ppp/FamousWesternV02n011938-03ppp.pdf",],
  [1938, 03, "Short Stories",                               "Vol. 162 | No. 005", "https://archive.org/download/ShortStoriesV162N0519380310/Short%20Stories%20v162%20n05%20%5B1938-03-10%5D.pdf",],
  [1938, 05, "Western Story Magazine",                      "Vol. 165 | No. 001", "https://archive.org/download/WesternStoryV165N0119380514/Western%20Story%20v165%20n01%20%281938-05-14%29.pdf",],
  [1939, 01, "Masked Rider Western",                        "Vol. 006 | No. 001", "https://archive.org/download/masked-rider-western-v-06-n-01-1939-01-missing-fc-pp-4-113_202011/Masked%20Rider%20Western%20v06%20n01%20%5B1939-01%5D%20%28missing%20fc%2C%20pp%204%2C%20113%29.pdf", "http://www.philsp.com/data/images/m/masked_rider_western_193901.jpg"],
  [1939, 02, "Western Story Magazine",                      "Vol. 171 | No. 003", "https://archive.org/download/WesternStoryV171N0319390204/Western%20Story%20v171%20n03%20%281939-02-04%29.pdf",],
  [1939, 04, "Frontier Stories",                            "Vol. 014 | No. 003", "https://archive.org/download/1939-04-frontier-stories-v014n003/1939-04%20Frontier%20Stories%20v014n003.pdf", "https://archive.org/download/1939-04-frontier-stories-v014n003/1939-04%20Frontier%20Stories%20v014n003_jp2.zip/1939-04%20Frontier%20Stories%20v014n003_jp2%2F1939-04%20Frontier%20Stories%20v014n003_0000.jp2&ext=jpg"],
  [1939, 06, "Western Story Magazine",                      "Vol. 174 | No. 003", "https://archive.org/download/WesternStoryV174N0319390610/Western%20Story%20v174%20n03%20%281939-06-10%29.pdf",],
  [1939, 06, "Western Story Magazine",                      "Vol. 174 | No. 005", "https://archive.org/download/WesternStoryV174N0519390624/Western%20Story%20v174%20n05%20%281939-06-24%29.pdf",],
  [1939, 07, "Spicy Western Stories",                       "Vol. 005 | No. 003", "https://archive.org/download/spicywesternstoriesv05n03193907missingifcibcbcpartofpg127jt/Spicy%20Western%20Stories%20v05n03%20%5B1939-07%5D%20%28missing%20ifc%2C%20ibc%2C%20bc%2C%20part%20of%20pg127%29%20%5BJT%5D.pdf",],
  [1939, 09, "Western Story Magazine",                      "Vol. 176 | No. 003", "https://archive.org/download/WesternStoryV176N0319390902/Western%20Story%20v176%20n03%20%5B1939-09-02%5D.pdf",],
  [1939, 10, "Action Stories",                              "Vol. 015 | No. 006", "https://archive.org/download/ActionStories193910URFATLPM/Action%20Stories%20-%201939-10%20%5BURF-AT-LPM%5D.pdf",],
  [1939, 10, "Western Story Magazine",                      "Vol. 177 | No. 005", "https://archive.org/download/WesternStoryV177N0519391028/Western%20Story%20v177%20n05%20%5B1939-10-28%5D.pdf",],
  [1939, 11, "Cowboy Short Stories",                        "Vol. 002 | No. 004", "https://archive.org/download/1939-11-cowboy-short-stories-v002n004/1939-11%20Cowboy%20Short%20Stories%20v002n004.pdf",],
  [1939, 11, "Western Story Magazine",                      "Vol. 178 | No. 001", "https://archive.org/download/WesternStoryV178N0119391111/Western%20Story%20v178%20n01%20%281939-11-11%29.pdf",],
  [1939, 11, "Western Story Magazine",                      "Vol. 178 | No. 002", "https://archive.org/download/WesternStoryV178N0219391118/Western%20Story%20v178%20n02%20%281939-11-18%29.pdf",],
  [1939, 11, "Western Story Magazine",                      "Vol. 178 | No. 003", "https://archive.org/download/WesternStoryV178N0319391125/Western%20Story%20v178%20n03%20%281939-11-25%29.pdf",],
  [1939, 12, "Western Story Magazine",                      "Vol. 178 | No. 005", "https://archive.org/download/WesternStoryV178N0519391209/Western%20Story%20v178%20n05%20%281939-12-09%29.pdf",],
  [1939, 12, "Western Story Magazine",                      "Vol. 178 | No. 006", "https://archive.org/download/WesternStoryV178N0619391216/Western%20Story%20v178%20n06%20%281939-12-16%29.pdf",],
  [1939, 12, "Western Story Magazine",                      "Vol. 179 | No. 001", "https://archive.org/download/WesternStoryV179N0119391223/Western%20Story%20v179%20n01%20%281939-12-23%29.pdf",],
  [1939, 12, "Western Story Magazine",                      "Vol. 179 | No. 002", "https://archive.org/download/WesternStoryV179N0219391230/Western%20Story%20v179%20n02%20%281939-12-30%29.pdf",],
  [1940, 07, "Western Story Magazine",                      "Vol. 184 | No. 002", "https://archive.org/download/wsm_1940_07_27/wsm_1940_07_27.pdf", "https://archive.org/download/wsm_1940_07_27/wsm_1940_07_27_jp2.zip/wsm_1940_07_27_jp2%2Fwsm_1940_07_27_0000.jp2&ext=jpg"],
  [1941, 02, "Spicy Western Stories",                       "Vol. 007 | No. 003", "https://archive.org/download/spicywesternstoriesv07n03194102nofcifcibcbcjvhexciter/Spicy%20Western%20Stories%20v07n03%20%5B1941-02%5D%20%28No%20fc%2Cifc%2Cibc%2Cbc%29%20%7Bjvh-EXciter%7D.pdf",],
  [1941, 03, "Short Stories",                               "Vol. 174 | No. 005", "https://archive.org/download/short-stories-v-174-n-05-1941-03-10/Short%20Stories%20v174%20n05%20%5B1941-03-10%5D.pdf",],
  [1941, 06, "Frontier Stories",                            "Vol. 014 | No. 011", "https://archive.org/download/1941-06-frontier-stories-v-014n-011/1941-06%20Frontier%20Stories%20v014n011.pdf", "https://archive.org/download/1941-06-frontier-stories-v-014n-011/1941-06%20Frontier%20Stories%20v014n011_jp2.zip/1941-06%20Frontier%20Stories%20v014n011_jp2%2F1941-06%20Frontier%20Stories%20v014n011_0000.jp2&ext=jpg"],
  [1941, 08, "Short Stories",                               "Vol. 176 | No. 003", "https://archive.org/download/short-stories-v-176-n-03-1941-08-10/Short%20Stories%20v176%20n03%20%5B1941-08-10%5D.pdf",],
  [1942, 01, "2-Gun Western",                               "Vol. 003 | No. 001", "https://archive.org/download/2GunWesternV03n01194201GambitDarwin/2-Gun%20Western%20v03n01%20%281942-01%29%20%28Gambit-Darwin%29.pdf",],
  [1942, 03, "Thrilling Western",                           "Vol. 038 | No. 003", "https://archive.org/download/ThrillingWesternV38n03194203EXciterNoIbcBc/Thrilling%20Western%20v38n03%20%281942-03%29%20%28EXciter%29%7BNo%20ibc-bc%7D.pdf",],
  [1942, 04, "2-Gun Western",                               "Vol. 003 | No. 002", "https://archive.org/download/2GunWesternV03n02194204TeamMalDPP/2-Gun%20Western%20v03n02%20%281942-04%29%20%28TeamMal-DPP%29.pdf",],
  [1942, 06, "Action Stories",                              "Vol. 016 | No. 010", "https://archive.org/download/ActionStories194206URFATLPM/Action%20Stories%20-%201942-06%20%5BURF-AT-LPM%5D.pdf",],
  [1942, 10, "Action Stories",                              "Vol. 016 | No. 012", "https://archive.org/download/ActionStories194210URFATLPM/Action%20Stories%20-%201942-10%20%5BURF-AT-LPM%5D.pdf",],
  [1943, 02, "Ranch Romances",                              "Vol. 111 | No. 003", "https://archive.org/download/rr_1943_03_01/rr_1943_03_01.pdf", "https://archive.org/download/rr_1943_03_01/rr_1943_03_01_jp2.zip/rr_1943_03_01_jp2%2Frr_1943_03_01_0000.jp2&ext=jpg"],
  [1943, 11, "Western Story Magazine",                      "Vol. 209 | No. 003", "https://archive.org/download/WesternStoryV209N0319431113/Western%20Story%20v209%20n03%20%281943-11-13%29.pdf",],
  [1943, 12, "Western Story Magazine",                      "Vol. 209 | No. 006", "https://archive.org/download/WesternStory19431225SASLPM/Western%20Story%20-%201943-12-25%20%5BSAS-LPM%5D.pdf",],
  [1944, 01, "Masked Rider Western",                        "Vol. 015 | No. 003", "https://archive.org/download/maskedriderwesternv15n03194401/Masked%20Rider%20Western%20v15n03%20%5B1944-01%5D.pdf",],
  [1944, 02, "Western Story Magazine",                      "Vol. 210 | No. 003", "https://archive.org/download/westernstoryv210n0319440205saslpm/Western%20Story%20v210n03%20%5B1944-02-05%5D%20%5BSAS-LPM%5D.pdf",],
  [1944, 07, "Ranch Romances",                              "Vol. 120 | No. 004", "https://archive.org/download/ranch-romances-v-120-n-04-1944-07-28/Ranch%20Romances%20v120%20n04%20%5B1944-07-28%5D.pdf",],
  [1944, 09, "Frontier Stories",                            "Vol. 015 | No. 012", "https://archive.org/download/1944-09-frontier-stories-v-015n-012/1944-09%20Frontier%20Stories%20v015n012.pdf", "https://archive.org/download/1944-09-frontier-stories-v-015n-012/1944-09%20Frontier%20Stories%20v015n012_jp2.zip/1944-09%20Frontier%20Stories%20v015n012_jp2%2F1944-09%20Frontier%20Stories%20v015n012_0000.jp2&ext=jpg"],
  [1944, 09, "Western Story Magazine",                      "Vol. 211 | No. 005", "https://archive.org/download/western-story-v-211-n-05-1944-09/Western%20Story%20v211%20n05%20%5B1944-09%5D.pdf",],
  [1944, 11, "Western Story Magazine",                      "Vol. 212 | No. 001", "https://archive.org/download/western-story-v-212-n-01-1944-11/Western%20Story%20v212%20n01%20%5B1944-11%5D.pdf",],
  [1945, 01, "Speed Western Stories",                       "Vol. 003 | No. 005", "https://archive.org/download/speedwesternv03n05194501urfsaslpmat/Speed%20Western%20v03n05%20%5B1945-01%5D%20%7BURF-SAS-LPM-AT%7D.pdf",],
  [1945, 03, "Action Stories",                              "Vol. 017 | No. 011", "https://archive.org/download/actionstoriesv17n111945spring/Action%20Stories%20v17%20n11%20%5B1945-Spring%5D.pdf",],
  [1945, 07, "Blue Ribbon Western",                         "Vol. 008 | No. 002", "https://archive.org/download/blue-ribbon-western-v-08-n-02-1945-07-missing-covers/Blue%20Ribbon%20Western%20v08%20n02%20%5B1945-07%5D%20missing%20covers.pdf",],
  [1945, 09, "Speed Western Stories",                       "Vol. 005 | No. 001", "https://archive.org/download/speedwesternv05n01194509/Speed%20Western%20v05n01%20%5B1945-09%5D.pdf",],
  [1945, 11, "Masked Rider Western",                        "Vol. 017 | No. 002", "https://archive.org/download/Masked_Rider_Western_v17n02_1945-12.Better_c2c_Wilddog-DPP/Masked%20Rider%20Western%20v17n02%201945-12.Better%20c2c%20%28Wilddog-DPP%29.pdf",],
  [1945, 12, "Speed Western Stories",                       "Vol. 005 | No. 004", "https://archive.org/download/SpeedWesternStoriesV5n3Dec1945jvhEXciter/Speed%20Western%20Stories%20v5n3%20%28Dec%201945%29%20%7Bjvh-EXciter%7D.pdf",],
  [1946, 01, "Fifteen Western Tales",                       "Vol. 008 | No. 004", "https://archive.org/download/1946-01-fifteen-western-tales-v008n004/1946-01%20Fifteen%20Western%20Tales%20v008n004.pdf", "https://archive.org/download/1946-01-fifteen-western-tales-v008n004/1946-01%20Fifteen%20Western%20Tales%20v008n004_jp2.zip/1946-01%20Fifteen%20Western%20Tales%20v008n004_jp2%2F1946-01%20Fifteen%20Western%20Tales%20v008n004_0000.jp2&ext=jpg"],
  [1946, 03, "Speed Western Stories",                       "Vol. 006 | No. 001", "https://archive.org/download/speedwesternv06n01194603/Speed%20Western%20v06n01%20%5B1946-03%5D.pdf",],
  [1946, 06, "Short Stories",                               "Vol. 195 | No. 005", "https://archive.org/download/short-stories-v-195-n-05-1946-06-10/Short%20Stories%20v195-n05%20%5B1946-06-10%5D.pdf",],
  [1946, 06, "Short Stories",                               "Vol. 195 | No. 006", "https://archive.org/download/short-stories-v-195-n-06-1946-06-25/Short%20Stories%20v195%20n06%20%5B1946-06-25%5D.pdf",],
  [1946, 07, "Short Stories",                               "Vol. 196 | No. 001", "https://archive.org/download/short-stories-v-196-n-01-1946-07-10/Short%20Stories%20v196%20n01%20%5B1946-07-10%5D.pdf",],
  [1946, 08, "Exciting Western",                            "Vol. 012 | No. 001", "https://archive.org/download/Exciting_Western_v12n01_1946-08.Better_ic_Wilddog-DPP/Exciting%20Western%20v12n01%201946-08.Better%20ic%20%28Wilddog-DPP%29.pdf",],
  [1946, 09, "Frontier Stories",                            "Vol. 016 | No. 008", "https://archive.org/download/1946-09-frontier-stories-v016n008/1946-09%20Frontier%20Stories%20v016n008.pdf", "https://archive.org/download/1946-09-frontier-stories-v016n008/1946-09%20Frontier%20Stories%20v016n008_jp2.zip/1946-09%20Frontier%20Stories%20v016n008_jp2%2F1946-09%20Frontier%20Stories%20v016n008_0000.jp2&ext=jpg"],
  [1946, 09, "Speed Western Stories",                       "Vol. 006 | No. 004", "https://archive.org/download/speedwesternv06n04194609jt/Speed%20Western%20v06n04%20%5B1946-09%5D%20%7BJT%7D.pdf",],
  [1946, 11, "Short Stories",                               "Vol. 197 | No. 004", "https://archive.org/download/short-stories-v-197-n-004-1946-11-25/Short%20Stories%20v197%20n004%20%5B1946-11-25%5D.pdf",],
  [1946, 12, "Frontier Stories",                            "Vol. 016 | No. 010", "https://archive.org/download/frontier-stories-v-16-n-10-1947-spring_202011/Frontier%20Stories%20v16%20n10%20%5B1947-Spring%5D.pdf",],
  [1946, 12, "Ranch Romances",                              "Vol. 136 | No. 003", "https://archive.org/download/ranch-romances-v-136-n-03-1946-12-27/Ranch%20Romances%20v136%20n03%20%5B1946-12-27%5D.pdf",],
  [1946, 12, "Thrilling Western",                           "Vol. 039 | No. 003", "https://archive.org/download/thrilling-western-v-39-n-03-1946-12/Thrilling%20Western%20v39%20n03%20%5B1946-12%5D.pdf",],
  [1947, 01, "Exciting Western",                            "Vol. 012 | No. 003", "https://archive.org/download/Exciting_Western_v12n03_1947-01.Better_ic_Wilddog-DPP/Exciting%20Western%20v12n03%201947-01.Better%20ic%20%28Wilddog-DPP%29.pdf",],
  [1947, 03, "Short Stories",                               "Vol. 199 | No. 005", "https://archive.org/download/short-stories-v-199-n-05-1947-03-10-missing-ibc-bc/Short%20Stories%20v199%20n05%20%5B1947-03-10%5D%20missing%20ibc%2C%20bc.pdf",],
  [1947, 05, "Zane Grey’s Western",                         "Vol. 001 | No. 004", "https://archive.org/download/zanegreyswesternmagazinev01n04194705/Zane%20Grey%27s%20Western%20Magazine%20v01n04%20%281947-05%29.pdf",],
  [1947, 07, "Thrilling Western",                           "Vol. 042 | No. 001", "https://archive.org/download/ThrillingWesternV42n01194707narfstar/Thrilling%20Western%20v42n01%20%281947-07%29%20%28narfstar%29.pdf",],
  [1947, 07, "Western Trails",                              "Vol. 042 | No. 004", "https://archive.org/download/WesternTrailsV42N04194707P77P80/Western%20Trails%20v42%20n04%20%281947-07%29%20%28-p77-p80%29.pdf",],
  [1947, 09, "Exciting Western",                            "Vol. 014 | No. 001", "https://archive.org/download/Exciting_Western_v14n01_Better_Sep_1947_Wilddog-DPP/Exciting%20Western%20v14n01%20Better%20%28Sep%201947%29%20%28Wilddog-DPP%29.pdf", "https://archive.org/download/Exciting_Western_v14n01_Better_Sep_1947_Wilddog-DPP/Exciting%20Western%20v14n01%20Better%20%28Sep%201947%29%20%28Wilddog-DPP%29_jp2.zip/Exciting%20Western%20v14n01%20Better%20%28Sep%201947%29%20%28Wilddog-DPP%29_jp2%2FExciting%20Western%20v14n01%20Better%20%28Sep%201947%29%20%28Wilddog-DPP%29_0000.jp2&ext=jpg"],
  [1947, 10, "Speed Western Stories",                       "Vol. 007 | No. 005", "https://archive.org/download/speedwesternv07n05194710/Speed%20Western%20v07%20n05%20%281947-10%29.pdf",],
  [1948, 02, "Thrilling Western",                           "Vol. 044 | No. 002", "https://archive.org/download/ThrillingWesternV44N02194802/Thrilling%20Western%20v44%20n02%20%281948-02%29.pdf",],
  [1948, 03, "Action Stories",                              "Vol. 018 | No. 011", "https://archive.org/download/action-stories-spring-1948/Action%20Stories%20Spring%201948.pdf",],
  [1948, 04, "Short Stories",                               "Vol. 204 | No. 001", "https://archive.org/download/ShortStoriesV204N0119480410/Short%20Stories%20v204%20n01%20%5B1948-04-10%5D.pdf",],
  [1948, 06, "Short Stories",                               "Vol. 204 | No. 005", "https://archive.org/download/shortstoriesv204n0519480625/Short%20Stories%20v204%20n05%20%5B1948-06-25%5D.pdf",],
  [1948, 08, "Short Stories",                               "Vol. 205 | No. 003", "https://archive.org/download/ShortStoriesV205N0319480810/Short%20Stories%20v205%20n03%20%5B1948-08-10%5D.pdf",],
  [1948, 11, "Mammoth Western",                             "Vol. 004 | No. 011", "https://archive.org/download/mammoth-western-v-04n-11-1948-11-ziff-davis-darwin-dpp/Mammoth%20Western%20v04n11%20%5B1948-11%5D%20%28Ziff-Davis%29%20%28Darwin-DPP%29.pdf",],
  [1949, 00, "Selected Western Stories",                    "Vol. 187 | No. 000", "https://archive.org/download/selected-western-stories-1949-leo-margulies-ed/Selected%20Western%20Stories%20%281949%29%20-%20Leo%20Margulies%20%28ed%29.pdf",],
  [1949, 03, "Action Stories",                              "Vol. 019 | No. 003", "https://archive.org/download/ActionStoriesV19n03Spring1949jvhEXciter/Action%20Stories%20v19n03%20%28Spring%201949%29%20%7Bjvh-EXciter%7D.pdf",],
  [1949, 03, "Frontier Stories",                            "Vol. 017 | No. 006", "https://archive.org/download/1949-03-frontier-stories-v017n006/1949-03%20Frontier%20Stories%20v017n006.pdf", "https://archive.org/download/1949-03-frontier-stories-v017n006/1949-03%20Frontier%20Stories%20v017n006_jp2.zip/1949-03%20Frontier%20Stories%20v017n006_jp2%2F1949-03%20Frontier%20Stories%20v017n006_0000.jp2&ext=jpg"],
  [1949, 07, "Frontier Stories",                            "Vol. 017 | No. 008", "https://archive.org/download/FrontierStoriesV17n081949FallATLPMUrf/Frontier%20Stories%20v17n08%20%5B1949-Fall%5D%20%28AT-LPM-Urf%29.pdf",],
  [1949, 11, "Fifteen Western Tales",                       "Vol. 020 | No. 002", "https://archive.org/download/1949-11-fifteen-western-tales-v020n002/1949-11%20Fifteen%20Western%20Tales%20v020n002.pdf", "https://archive.org/download/1949-11-fifteen-western-tales-v020n002/1949-11%20Fifteen%20Western%20Tales%20v020n002_jp2.zip/1949-11%20Fifteen%20Western%20Tales%20v020n002_jp2%2F1949-11%20Fifteen%20Western%20Tales%20v020n002_0000.jp2&ext=jpg"],
  [1949, 11, "Western Love Trails",                         "Vol. 001 | No. 007", "https://archive.org/download/1949-11-western-love-trails-v001n007/1949-11%20Western%20Love%20Trails%20v001n007.pdf",],
  [1949, 12, "10 Story Western",                            "Vol. 041 | No. 001", "https://archive.org/download/10_story_western_v41n01_1949-12_popular-publications/10_story_western_v41n01_1949-12_popular-publications.pdf", "https://archive.org/download/10_story_western_v41n01_1949-12_popular-publications/10_story_western_v41n01_1949-12_popular-publications_images.zip/10sw4912001.jpg"],
  [1949, 03, "Action Stories",                              "Vol. 019 | No. 007", "https://archive.org/download/ActionStories1950SpringURFATLPM/Action%20Stories%20-%201950-Spring%20%5BURF-AT-LPM%5D.pdf",],
  [1950, 03, "Indians",                                     "Vol. 001 | No. 001", "https://archive.org/download/1950-03-indians-v001n001/1950-03%20Indians%20v001n001.pdf", "https://archive.org/download/1950-03-indians-v001n001/1950-03%20Indians%20v001n001_jp2.zip/1950-03%20Indians%20v001n001_jp2%2F1950-03%20Indians%20v001n001_0000.jp2&ext=jpg"],
  [1950, 11, "Indian Stories",                              "Vol. 001 | No. 003", "https://archive.org/download/is_1950_win/is_1950_win.pdf", "https://archive.org/download/is_1950_win/is_1950_win_jp2.zip/is_1950_win_jp2%2Fis_1950_win_0000.jp2&ext=jpg"],
  [1950, 11, "Masked Rider Western",                        "Vol. 028 | No. 003", "https://archive.org/download/Masked_Rider_Western_v28n03_1950-11.Better_c2c_Wilddog-DPP/Masked%20Rider%20Western%20v28n03%201950-11.Better%20c2c%20%28Wilddog-DPP%29.pdf", "https://archive.org/download/Masked_Rider_Western_v28n03_1950-11.Better_c2c_Wilddog-DPP/Masked%20Rider%20Western%20v28n03%201950-11.Better%20c2c%20%28Wilddog-DPP%29_jp2.zip/Masked%20Rider%20Western%20v28n03%201950-11.Better%20c2c%20%28Wilddog-DPP%29_jp2%2FMasked%20Rider%20Western%20v28n03%201950-11.Better%20c2c%20%28Wilddog-DPP%29_0000.jp2&ext=jpg"],
  [1951, 02, "Short Stories",                               "Vol. 211 | No. 002", "https://archive.org/download/short-stories-v-211-n-002-1951-02/Short%20Stories%20v211%20n002%20%5B1951-02%5D.pdf",],
  [1951, 06, "Indian Stories",                              "Vol. 001 | No. 009", "https://archive.org/download/indian-stories-09-fiction-house/indian_stories_09_fiction_house.pdf", "https://archive.org/download/indian-stories-09-fiction-house/indian_stories_09_fiction_house_jp2.zip/indian_stories_09_fiction_house_jp2%2Findian_stories_09_fiction_house_0000.jp2&ext=jpg"],
  [1951, 09, "Short Stories",                               "Vol. 212 | No. 003", "https://archive.org/download/shortstoriesv212n03195109/Short%20Stories%20v212n03%20%5B1951-09%5D.pdf",],
  [1952, 05, "Fifteen Western Tales",                       "Vol. 025 | No. 003", "https://archive.org/download/1952-05-fifteen-western-tales-v025n003/1952-05%20Fifteen%20Western%20Tales%20v025n003.pdf",],
  [1952, 05, "Short Stories",                               "Vol. 213 | No. 005", "https://archive.org/download/short-stories-v-213-n-05-1952-05_202011/Short%20Stories%20v213%20n05%20%5B1952-05%5D.pdf",],
  [1953, 01, "Fifteen Western Tales",                       "Vol. 026 | No. 003", "https://archive.org/download/fwt_1953_01/fwt_1953_01.pdf", "https://archive.org/download/fwt_1953_01/fwt_1953_01_jp2.zip/fwt_1953_01_jp2%2Ffwt_1953_01_0000.jp2&ext=jpg"],
  [1954, 03, "Fifteen Western Tales",                       "Vol. 028 | No. 002", "https://archive.org/download/1954-03-fifteen-western-tales-v028n002/1954-03%20Fifteen%20Western%20Tales%20v028n002.pdf", "https://archive.org/download/1954-03-fifteen-western-tales-v028n002/1954-03%20Fifteen%20Western%20Tales%20v028n002_jp2.zip/1954-03%20Fifteen%20Western%20Tales%20v028n002_jp2%2F1954-03%20Fifteen%20Western%20Tales%20v028n002_0000.jp2&ext=jpg"],
  [1955, 10, "2-Gun Western",                               "Vol. 002 | No. 005", "https://archive.org/download/2_Gun_Western_v02n05_/2GW_1955_11.pdf", "https://archive.org/download/2_Gun_Western_v02n05_/2GW_1955_11_jp2.zip/2GW_1955_11_jp2%2F2GW_1955_11_0000.jp2&ext=jpg"],
  [1957, 05, "2-Gun Western",                               "Vol. 003 | No. 005", "https://archive.org/download/2GunWesternV3n5May1957EXciter/2-Gun%20Western%20v3n5%20%28May%201957%29%20%7BEXciter%7D.pdf",],
  [1958, 05, "Action-Packed Western",                       "Vol. 004 | No. 004", "https://archive.org/download/ActionPackedWesternV04n04195805oak/Action-Packed%20Western%20v04n04%20%281958-05%29%20%28oak%29.pdf", ],
]
