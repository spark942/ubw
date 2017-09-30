const STAGES = [
    [1,0,0,null],
    [10,0,1,null],
    [11,0,0,null],
    [15,1,0,null],
    [16,0,0,null],
    [20,0,1,null],
    [21,0,0,null],
    [30,0,1,null],
    [31,0,0,null],
    [40,0,1,null],
    [41,0,0,null],
    [42,1,0,null],
    [43,0,0,null],
    [50,0,1,null],
    [51,0,0,null],
    [76,0,1,null],
    [77,0,0,null],
    [100,0,2,null],
    [101,0,0,null],
    [150,1,0,null],
    [151,0,0,null],
    [200,0,1,null],
    [201,0,0,null],
    [300,0,1,null],
    [301,0,0,null],
    [400,0,1,null],
    [401,0,0,null],
    [500,0,2,null],
    [501,0,0,null],
    [600,0,1,null],
    [601,0,0,null],
    [666,0,4,22],
    [667,0,0,null],
    [700,0,1,null],
    [701,0,0,null],
    [800,0,1,null],
    [801,0,0,null],
    [900,0,1,null],
    [901,0,0,null],
    [1000,0,3,null],
    [1001,1,0,null],
    [1002,0,0,null],
    [1100,0,1,null],
    [1101,0,0,null],
    [1200,0,1,null],
    [1201,0,0,null],
    [1300,0,1,null],
    [1301,0,0,null],
    [1400,0,1,null],
    [1401,0,0,null],
    [1500,0,2,null],
    [1501,0,0,null],
    [1600,0,1,null],
    [1601,0,0,null],
    [1700,0,1,null],
    [1701,0,0,null],
    [1800,0,1,null],
    [1801,0,0,null],
    [1900,0,1,null],
    [1901,0,0,null],
    [2000,0,3,null],
    [2001,1,0,null],
    [2002,0,0,null],
    [2100,0,1,null],
    [2101,0,0,null],
    [2200,0,1,null],
    [2201,0,0,null],
    [2300,0,1,null],
    [2301,0,0,null],
    [2400,0,1,null],
    [2401,0,0,null],
    [2500,0,2,null],
    [2501,0,0,null],
    [2600,0,1,null],
    [2601,0,0,null],
    [2700,0,1,null],
    [2701,0,0,null],
    [2800,0,1,null],
    [2801,0,0,null],
    [2900,0,1,null],
    [2901,0,0,null],
    [3000,0,3,null],
    [3001,1,0,null],
    [3002,0,0,null],
    [3100,0,1,null],
    [3101,0,0,null],
    [3200,0,1,null],
    [3201,0,0,null],
    [3300,0,1,null],
    [3301,0,0,null],
    [3400,0,1,null],
    [3401,0,0,null],
    [3500,0,2,null],
    [3501,0,0,null],
    [3600,0,1,null],
    [3601,0,0,null],
    [3700,0,1,null],
    [3701,0,0,null],
    [3800,0,1,null],
    [3801,0,0,null],
    [3900,0,1,null],
    [3901,0,0,null],
    [4000,0,3,null],
    [4001,1,0,null],
    [4002,0,0,null],
    [4100,0,1,null],
    [4101,0,0,null],
    [4200,0,1,null],
    [4201,0,0,null],
    [4300,0,1,null],
    [4301,0,0,null],
    [4400,0,1,null],
    [4401,0,0,null],
    [4500,0,2,null],
    [4501,0,0,null],
    [4600,0,1,null],
    [4601,0,0,null],
    [4700,0,1,null],
    [4701,0,0,null],
    [4800,0,1,null],
    [4801,0,0,null],
    [4900,0,1,null],
    [4901,0,0,null],
    [5000,0,3,null],
    [5001,1,0,null],
    [5002,0,0,null],
    [5100,0,1,null],
    [5101,0,0,null],
    [5200,0,1,null],
    [5201,0,0,null],
    [5300,0,1,null],
    [5301,0,0,null],
    [5400,0,1,null],
    [5401,0,0,null],
    [5500,0,2,null],
    [5501,0,0,null],
    [5600,0,1,null],
    [5601,0,0,null],
    [5700,0,1,null],
    [5701,0,0,null],
    [5800,0,1,null],
    [5801,0,0,null],
    [5900,0,1,null],
    [5901,0,0,null],
    [6000,0,3,null],
    [6001,1,0,null],
    [6002,0,0,null],
    [6100,0,1,null],
    [6101,0,0,null],
    [6200,0,1,null],
    [6201,0,0,null],
    [6300,0,1,null],
    [6301,0,0,null],
    [6400,0,1,null],
    [6401,0,0,null],
    [6500,0,2,null],
    [6501,0,0,null],
    [6600,0,1,null],
    [6601,0,0,null],
    [6700,0,1,null],
    [6701,0,0,null],
    [6800,0,1,null],
    [6801,0,0,null],
    [6900,0,1,null],
    [6901,0,0,null],
    [7000,0,3,null],
    [7001,1,0,null],
    [7002,0,0,null],
    [7100,0,1,null],
    [7101,0,0,null],
    [7200,0,1,null],
    [7201,0,0,null],
    [7300,0,1,null],
    [7301,0,0,null],
    [7400,0,1,null],
    [7401,0,0,null],
    [7500,0,2,null],
    [7501,0,0,null],
    [7600,0,1,null],
    [7601,0,0,null],
    [7700,0,1,null],
    [7701,0,0,null],
    [7800,0,1,null],
    [7801,0,0,null],
    [7900,0,1,null],
    [7901,0,0,null],
    [8000,0,3,null],
    [8001,1,0,null],
    [8002,0,0,null],
    [8100,0,1,null],
    [8101,0,0,null],
    [8200,0,1,null],
    [8201,0,0,null],
    [8300,0,1,null],
    [8301,0,0,null],
    [8400,0,1,null],
    [8401,0,0,null],
    [8500,0,2,null],
    [8501,0,0,null],
    [8600,0,1,null],
    [8601,0,0,null],
    [8700,0,1,null],
    [8701,0,0,null],
    [8800,0,1,null],
    [8801,0,0,null],
    [8900,0,1,null],
    [8901,0,0,null],
    [9000,0,3,null],
    [9001,1,0,null],
    [9002,0,0,null],
    [9100,0,1,null],
    [9101,0,0,null],
    [9200,0,1,null],
    [9201,0,0,null],
    [9300,0,1,null],
    [9301,0,0,null],
    [9400,0,1,null],
    [9401,0,0,null],
    [9500,0,2,null],
    [9501,0,0,null],
    [9600,0,1,null],
    [9601,0,0,null],
    [9700,0,1,null],
    [9701,0,0,null],
    [9800,0,1,null],
    [9801,0,0,null],
    [9900,0,1,null],
    [9901,0,0,null],
    [10000,0,3,null],
    [10001,1,0,null],
    [10002,0,0,null],
    [10100,0,1,null],
    [10101,0,0,null],
    [10200,0,1,null],
    [10201,0,0,null],
    [10300,0,1,null],
    [10301,0,0,null],
    [10400,0,1,null],
    [10401,0,0,null],
    [10500,0,2,null],
    [10501,0,0,null],
    [10600,0,1,null],
    [10601,0,0,null],
    [10700,0,1,null],
    [10701,0,0,null],
    [10800,0,1,null],
    [10801,0,0,null],
    [10900,0,1,null],
    [10901,0,0,null],
    [11000,0,3,null],
    [11001,1,0,null],
    [11002,0,0,null],
    [11100,0,1,null],
    [11101,0,0,null],
    [11200,0,1,null],
    [11201,0,0,null],
    [11300,0,1,null],
    [11301,0,0,null],
    [11400,0,1,null],
    [11401,0,0,null],
    [11500,0,2,null],
    [11501,0,0,null],
    [11600,0,1,null],
    [11601,0,0,null],
    [11700,0,1,null],
    [11701,0,0,null],
    [11800,0,1,null],
    [11801,0,0,null],
    [11900,0,1,null],
    [11901,0,0,null],
    [12000,0,3,null],
    [12001,1,0,null],
    [12002,0,0,null],
    [12100,0,1,null],
    [12101,0,0,null],
    [12200,0,1,null],
    [12201,0,0,null],
    [12300,0,1,null],
    [12301,0,0,null],
    [12400,0,1,null],
    [12401,0,0,null],
    [12500,0,2,null],
    [12501,0,0,null],
    [12600,0,1,null],
    [12601,0,0,null],
    [12700,0,1,null],
    [12701,0,0,null],
    [12800,0,1,null],
    [12801,0,0,null],
    [12900,0,1,null],
    [12901,0,0,null],
    [13000,0,3,null],
    [13001,1,0,null],
    [13002,0,0,null],
    [13100,0,1,null],
    [13101,0,0,null],
    [13200,0,1,null],
    [13201,0,0,null],
    [13300,0,1,null],
    [13301,0,0,null],
    [13400,0,1,null],
    [13401,0,0,null],
    [13500,0,2,null],
    [13501,0,0,null],
    [13600,0,1,null],
    [13601,0,0,null],
    [13700,0,1,null],
    [13701,0,0,null],
    [13800,0,1,null],
    [13801,0,0,null],
    [13900,0,1,null],
    [13901,0,0,null],
    [14000,0,3,null],
    [14001,1,0,null],
    [14002,0,0,null],
    [14100,0,1,null],
    [14101,0,0,null],
    [14200,0,1,null],
    [14201,0,0,null],
    [14300,0,1,null],
    [14301,0,0,null],
    [14400,0,1,null],
    [14401,0,0,null],
    [14500,0,2,null],
    [14501,0,0,null],
    [14600,0,1,null],
    [14601,0,0,null],
    [14700,0,1,null],
    [14701,0,0,null],
    [14800,0,1,null],
    [14801,0,0,null],
    [14900,0,1,null],
    [14901,0,0,null],
    [15000,0,3,null],
    [15001,1,0,null],
    [15002,0,0,null],
    [15100,0,1,null],
    [15101,0,0,null],
    [15200,0,1,null],
    [15201,0,0,null],
    [15300,0,1,null],
    [15301,0,0,null],
    [15400,0,1,null],
    [15401,0,0,null],
    [15500,0,2,null],
    [15501,0,0,null],
    [15600,0,1,null],
    [15601,0,0,null],
    [15700,0,1,null],
    [15701,0,0,null],
    [15800,0,1,null],
    [15801,0,0,null],
    [15900,0,1,null],
    [15901,0,0,null],
    [16000,0,3,null],
    [16001,1,0,null],
    [16002,0,0,null],
    [16100,0,1,null],
    [16101,0,0,null],
    [16200,0,1,null],
    [16201,0,0,null],
    [16300,0,1,null],
    [16301,0,0,null],
    [16400,0,1,null],
    [16401,0,0,null],
    [16500,0,2,null],
    [16501,0,0,null],
    [16600,0,1,null],
    [16601,0,0,null],
    [16700,0,1,null],
    [16701,0,0,null],
    [16800,0,1,null],
    [16801,0,0,null],
    [16900,0,1,null],
    [16901,0,0,null],
    [17000,0,3,null],
    [17001,1,0,null],
    [17002,0,0,null],
    [17100,0,1,null],
    [17101,0,0,null],
    [17200,0,1,null],
    [17201,0,0,null],
    [17300,0,1,null],
    [17301,0,0,null],
    [17400,0,1,null],
    [17401,0,0,null],
    [17500,0,2,null],
    [17501,0,0,null],
    [17600,0,1,null],
    [17601,0,0,null],
    [17700,0,1,null],
    [17701,0,0,null],
    [17800,0,1,null],
    [17801,0,0,null],
    [17900,0,1,null],
    [17901,0,0,null],
    [18000,0,3,null],
    [18001,1,0,null],
    [18002,0,0,null],
    [18100,0,1,null],
    [18101,0,0,null],
    [18200,0,1,null],
    [18201,0,0,null],
    [18300,0,1,null],
    [18301,0,0,null],
    [18400,0,1,null],
    [18401,0,0,null],
    [18500,0,2,null],
    [18501,0,0,null],
    [18600,0,1,null],
    [18601,0,0,null],
    [18700,0,1,null],
    [18701,0,0,null],
    [18800,0,1,null],
    [18801,0,0,null],
    [18900,0,1,null],
    [18901,0,0,null],
    [19000,0,3,null],
    [19001,1,0,null],
    [19002,0,0,null],
    [19100,0,1,null],
    [19101,0,0,null],
    [19200,0,1,null],
    [19201,0,0,null],
    [19300,0,1,null],
    [19301,0,0,null],
    [19400,0,1,null],
    [19401,0,0,null],
    [19500,0,2,null],
    [19501,0,0,null],
    [19600,0,1,null],
    [19601,0,0,null],
    [19700,0,1,null],
    [19701,0,0,null],
    [19800,0,1,null],
    [19801,0,0,null],
    [19900,0,1,null],
    [19901,0,0,null],
    [20000,0,3,null],
    [20001,1,0,null],
    [20002,0,0,null],
    [20100,0,1,null],
    [20101,0,0,null],
    [20200,0,1,null],
    [20201,0,0,null],
    [20300,0,1,null],
    [20301,0,0,null],
    [20400,0,1,null],
    [20401,0,0,null],
    [20500,0,2,null],
    [20501,0,0,null],
    [20600,0,1,null],
    [20601,0,0,null],
    [20700,0,1,null],
    [20701,0,0,null],
    [20800,0,1,null],
    [20801,0,0,null],
    [20900,0,1,null],
    [20901,0,0,null],
    [21000,0,3,null],
    [21001,1,0,null],
    [21002,0,0,null],
    [21100,0,1,null],
    [21101,0,0,null],
    [21200,0,1,null],
    [21201,0,0,null],
    [21300,0,1,null],
    [21301,0,0,null],
    [21400,0,1,null],
    [21401,0,0,null],
    [21500,0,2,null],
    [21501,0,0,null],
    [21600,0,1,null],
    [21601,0,0,null],
    [21700,0,1,null],
    [21701,0,0,null],
    [21800,0,1,null],
    [21801,0,0,null],
    [21900,0,1,null],
    [21901,0,0,null],
    [22000,0,3,null],
    [22001,1,0,null],
    [22002,0,0,null],
    [22100,0,1,null],
    [22101,0,0,null],
    [22200,0,1,null],
    [22201,0,0,null],
    [22300,0,1,null],
    [22301,0,0,null],
    [22400,0,1,null],
    [22401,0,0,null],
    [22500,0,2,null],
    [22501,0,0,null],
    [22600,0,1,null],
    [22601,0,0,null],
    [22700,0,1,null],
    [22701,0,0,null],
    [22800,0,1,null],
    [22801,0,0,null],
    [22900,0,1,null],
    [22901,0,0,null],
    [23000,0,3,null],
    [23001,1,0,null],
    [23002,0,0,null],
    [23100,0,1,null],
    [23101,0,0,null],
    [23200,0,1,null],
    [23201,0,0,null],
    [23300,0,1,null],
    [23301,0,0,null],
    [23400,0,1,null],
    [23401,0,0,null],
    [23500,0,2,null],
    [23501,0,0,null],
    [23600,0,1,null],
    [23601,0,0,null],
    [23700,0,1,null],
    [23701,0,0,null],
    [23800,0,1,null],
    [23801,0,0,null],
    [23900,0,1,null],
    [23901,0,0,null],
    [24000,0,3,null],
    [24001,1,0,null],
    [24002,0,0,null],
    [24100,0,1,null],
    [24101,0,0,null],
    [24200,0,1,null],
    [24201,0,0,null],
    [24300,0,1,null],
    [24301,0,0,null],
    [24400,0,1,null],
    [24401,0,0,null],
    [24500,0,2,null],
    [24501,0,0,null],
    [24600,0,1,null],
    [24601,0,0,null],
    [24700,0,1,null],
    [24701,0,0,null],
    [24800,0,1,null],
    [24801,0,0,null],
    [24900,0,1,null],
    [24901,0,0,null],
    [25000,0,3,null],
    [25001,1,0,null],
    [25002,0,0,null],
    [25100,0,1,null],
    [25101,0,0,null],
    [25200,0,1,null],
    [25201,0,0,null],
    [25300,0,1,null],
    [25301,0,0,null],
    [25400,0,1,null],
    [25401,0,0,null],
    [25500,0,2,null],
    [25501,0,0,null],
    [25600,0,1,null],
    [25601,0,0,null],
    [25700,0,1,null],
    [25701,0,0,null],
    [25800,0,1,null],
    [25801,0,0,null],
    [25900,0,1,null],
    [25901,0,0,null],
    [26000,0,3,null],
    [26001,1,0,null],
    [26002,0,0,null],
    [26100,0,1,null],
    [26101,0,0,null],
    [26200,0,1,null],
    [26201,0,0,null],
    [26300,0,1,null],
    [26301,0,0,null],
    [26400,0,1,null],
    [26401,0,0,null],
    [26500,0,2,null],
    [26501,0,0,null],
    [26600,0,1,null],
    [26601,0,0,null],
    [26700,0,1,null],
    [26701,0,0,null],
    [26800,0,1,null],
    [26801,0,0,null],
    [26900,0,1,null],
    [26901,0,0,null],
    [27000,0,3,null],
    [27001,1,0,null],
    [27002,0,0,null],
    [27100,0,1,null],
    [27101,0,0,null],
    [27200,0,1,null],
    [27201,0,0,null],
    [27300,0,1,null],
    [27301,0,0,null],
    [27400,0,1,null],
    [27401,0,0,null],
    [27500,0,2,null],
    [27501,0,0,null],
    [27600,0,1,null],
    [27601,0,0,null],
    [27700,0,1,null],
    [27701,0,0,null],
    [27800,0,1,null],
    [27801,0,0,null],
    [27900,0,1,null],
    [27901,0,0,null],
    [28000,0,3,null],
    [28001,1,0,null],
    [28002,0,0,null],
    [28100,0,1,null],
    [28101,0,0,null],
    [28200,0,1,null],
    [28201,0,0,null],
    [28300,0,1,null],
    [28301,0,0,null],
    [28400,0,1,null],
    [28401,0,0,null],
    [28500,0,2,null],
    [28501,0,0,null],
    [28600,0,1,null],
    [28601,0,0,null],
    [28700,0,1,null],
    [28701,0,0,null],
    [28800,0,1,null],
    [28801,0,0,null],
    [28900,0,1,null],
    [28901,0,0,null],
    [29000,0,3,null],
    [29001,1,0,null],
    [29002,0,0,null],
    [29100,0,1,null],
    [29101,0,0,null],
    [29200,0,1,null],
    [29201,0,0,null],
    [29300,0,1,null],
    [29301,0,0,null],
    [29400,0,1,null],
    [29401,0,0,null],
    [29500,0,2,null],
    [29501,0,0,null],
    [29600,0,1,null],
    [29601,0,0,null],
    [29700,0,1,null],
    [29701,0,0,null],
    [29800,0,1,null],
    [29801,0,0,null],
    [29900,0,1,null],
    [29901,0,0,null],
    [30000,0,3,null],
    [30001,1,0,null],
    [30002,0,0,null],
    [30100,0,1,null],
    [30101,0,0,null],
    [30200,0,1,null],
    [30201,0,0,null],
    [30300,0,1,null],
    [30301,0,0,null],
    [30400,0,1,null],
    [30401,0,0,null],
    [30500,0,2,null],
    [30501,0,0,null],
    [30600,0,1,null],
    [30601,0,0,null],
    [30700,0,1,null],
    [30701,0,0,null],
    [30800,0,1,null],
    [30801,0,0,null],
    [30900,0,1,null],
    [30901,0,0,null],
    [31000,0,3,null],
    [31001,1,0,null],
    [31002,0,0,null],
    [31100,0,1,null],
    [31101,0,0,null],
    [31200,0,1,null],
    [31201,0,0,null],
    [31300,0,1,null],
    [31301,0,0,null],
    [31400,0,1,null],
    [31401,0,0,null],
    [31500,0,2,null],
    [31501,0,0,null],
    [31600,0,1,null],
    [31601,0,0,null],
    [31700,0,1,null],
    [31701,0,0,null],
    [31800,0,1,null],
    [31801,0,0,null],
    [31900,0,1,null],
    [31901,0,0,null],
    [32000,0,3,null],
    [32001,1,0,null],
    [32002,0,0,null],
    [32100,0,1,null],
    [32101,0,0,null],
    [32200,0,1,null],
    [32201,0,0,null],
    [32300,0,1,null],
    [32301,0,0,null],
    [32400,0,1,null],
    [32401,0,0,null],
    [32500,0,2,null],
    [32501,0,0,null],
    [32600,0,1,null],
    [32601,0,0,null],
    [32700,0,1,null],
    [32701,0,0,null],
    [32800,0,1,null],
    [32801,0,0,null],
    [32900,0,1,null],
    [32901,0,0,null],
    [33000,0,3,null],
    [33001,1,0,null],
    [33002,0,0,null],
    [33100,0,1,null],
    [33101,0,0,null],
    [33200,0,1,null],
    [33201,0,0,null],
    [33300,0,1,null],
    [33301,0,0,null],
    [33400,0,1,null],
    [33401,0,0,null],
    [33500,0,2,null],
    [33501,0,0,null],
    [33600,0,1,null],
    [33601,0,0,null],
    [33700,0,1,null],
    [33701,0,0,null],
    [33800,0,1,null],
    [33801,0,0,null],
    [33900,0,1,null],
    [33901,0,0,null],
    [34000,0,3,null],
    [34001,1,0,null],
    [34002,0,0,null],
    [34100,0,1,null],
    [34101,0,0,null],
    [34200,0,1,null],
    [34201,0,0,null],
    [34300,0,1,null],
    [34301,0,0,null],
    [34400,0,1,null],
    [34401,0,0,null],
    [34500,0,2,null],
    [34501,0,0,null],
    [34600,0,1,null],
    [34601,0,0,null],
    [34700,0,1,null],
    [34701,0,0,null],
    [34800,0,1,null],
    [34801,0,0,null],
    [34900,0,1,null],
    [34901,0,0,null],
    [35000,0,3,null],
    [35001,1,0,null],
    [35002,0,0,null],
    [35100,0,1,null],
    [35101,0,0,null],
    [35200,0,1,null],
    [35201,0,0,null],
    [35300,0,1,null],
    [35301,0,0,null],
    [35400,0,1,null],
    [35401,0,0,null],
    [35500,0,2,null],
    [35501,0,0,null],
    [35600,0,1,null],
    [35601,0,0,null],
    [35700,0,1,null],
    [35701,0,0,null],
    [35800,0,1,null],
    [35801,0,0,null],
    [35900,0,1,null],
    [35901,0,0,null],
    [36000,0,3,null],
    [36001,1,0,null],
    [36002,0,0,null],
    [36100,0,1,null],
    [36101,0,0,null],
    [36200,0,1,null],
    [36201,0,0,null],
    [36300,0,1,null],
    [36301,0,0,null],
    [36400,0,1,null],
    [36401,0,0,null],
    [36500,0,2,null],
    [36501,0,0,null],
    [36600,0,1,null],
    [36601,0,0,null],
    [36700,0,1,null],
    [36701,0,0,null],
    [36800,0,1,null],
    [36801,0,0,null],
    [36900,0,1,null],
    [36901,0,0,null],
    [37000,0,3,null],
    [37001,1,0,null],
    [37002,0,0,null],
    [37100,0,1,null],
    [37101,0,0,null],
    [37200,0,1,null],
    [37201,0,0,null],
    [37300,0,1,null],
    [37301,0,0,null],
    [37400,0,1,null],
    [37401,0,0,null],
    [37500,0,2,null],
    [37501,0,0,null],
    [37600,0,1,null],
    [37601,0,0,null],
    [37700,0,1,null],
    [37701,0,0,null],
    [37800,0,1,null],
    [37801,0,0,null],
    [37900,0,1,null],
    [37901,0,0,null],
    [38000,0,3,null],
    [38001,1,0,null],
    [38002,0,0,null],
    [38100,0,1,null],
    [38101,0,0,null],
    [38200,0,1,null],
    [38201,0,0,null],
    [38300,0,1,null],
    [38301,0,0,null],
    [38400,0,1,null],
    [38401,0,0,null],
    [38500,0,2,null],
    [38501,0,0,null],
    [38600,0,1,null],
    [38601,0,0,null],
    [38700,0,1,null],
    [38701,0,0,null],
    [38800,0,1,null],
    [38801,0,0,null],
    [38900,0,1,null],
    [38901,0,0,null],
    [39000,0,3,null],
    [39001,1,0,null],
    [39002,0,0,null],
    [39100,0,1,null],
    [39101,0,0,null],
    [39200,0,1,null],
    [39201,0,0,null],
    [39300,0,1,null],
    [39301,0,0,null],
    [39400,0,1,null],
    [39401,0,0,null],
    [39500,0,2,null],
    [39501,0,0,null],
    [39600,0,1,null],
    [39601,0,0,null],
    [39700,0,1,null],
    [39701,0,0,null],
    [39800,0,1,null],
    [39801,0,0,null],
    [39900,0,1,null],
    [39901,0,0,null],
    [40000,0,3,null],
    [40001,1,0,null],
    [40002,0,0,null],
    [40100,0,1,null],
    [40101,0,0,null],
    [40200,0,1,null],
    [40201,0,0,null],
    [40300,0,1,null],
    [40301,0,0,null],
    [40400,0,1,null],
    [40401,0,0,null],
    [40500,0,2,null],
    [40501,0,0,null],
    [40600,0,1,null],
    [40601,0,0,null],
    [40700,0,1,null],
    [40701,0,0,null],
    [40800,0,1,null],
    [40801,0,0,null],
    [40900,0,1,null],
    [40901,0,0,null],
    [41000,0,3,null],
    [41001,1,0,null],
    [41002,0,0,null],
    [41100,0,1,null],
    [41101,0,0,null],
    [41200,0,1,null],
    [41201,0,0,null],
    [41300,0,1,null],
    [41301,0,0,null],
    [41400,0,1,null],
    [41401,0,0,null],
    [41500,0,2,null],
    [41501,0,0,null],
    [41600,0,1,null],
    [41601,0,0,null],
    [41700,0,1,null],
    [41701,0,0,null],
    [41800,0,1,null],
    [41801,0,0,null],
    [41900,0,1,null],
    [41901,0,0,null],
    [42000,0,3,null],
    [42001,1,0,null],
    [42002,0,0,null],
    [42100,0,1,null],
    [42101,0,0,null],
    [42200,0,1,null],
    [42201,0,0,null],
    [42300,0,1,null],
    [42301,0,0,null],
    [42400,0,1,null],
    [42401,0,0,null],
    [42500,0,2,null],
    [42501,0,0,null],
    [42600,0,1,null],
    [42601,0,0,null],
    [42700,0,1,null],
    [42701,0,0,null],
    [42800,0,1,null],
    [42801,0,0,null],
    [42900,0,1,null],
    [42901,0,0,null],
    [43000,0,3,null],
    [43001,1,0,null],
    [43002,0,0,null],
    [43100,0,1,null],
    [43101,0,0,null],
    [43200,0,1,null],
    [43201,0,0,null],
    [43300,0,1,null],
    [43301,0,0,null],
    [43400,0,1,null],
    [43401,0,0,null],
    [43500,0,2,null],
    [43501,0,0,null],
    [43600,0,1,null],
    [43601,0,0,null],
    [43700,0,1,null],
    [43701,0,0,null],
    [43800,0,1,null],
    [43801,0,0,null],
    [43900,0,1,null],
    [43901,0,0,null],
    [44000,0,3,null],
    [44001,1,0,null],
    [44002,0,0,null],
    [44100,0,1,null],
    [44101,0,0,null],
    [44200,0,1,null],
    [44201,0,0,null],
    [44300,0,1,null],
    [44301,0,0,null],
    [44400,0,1,null],
    [44401,0,0,null],
    [44500,0,2,null],
    [44501,0,0,null],
    [44600,0,1,null],
    [44601,0,0,null],
    [44700,0,1,null],
    [44701,0,0,null],
    [44800,0,1,null],
    [44801,0,0,null],
    [44900,0,1,null],
    [44901,0,0,null],
    [45000,0,3,null],
    [45001,1,0,null],
    [45002,0,0,null],
    [45100,0,1,null],
    [45101,0,0,null],
    [45200,0,1,null],
    [45201,0,0,null],
    [45300,0,1,null],
    [45301,0,0,null],
    [45400,0,1,null],
    [45401,0,0,null],
    [45500,0,2,null],
    [45501,0,0,null],
    [45600,0,1,null],
    [45601,0,0,null],
    [45700,0,1,null],
    [45701,0,0,null],
    [45800,0,1,null],
    [45801,0,0,null],
    [45900,0,1,null],
    [45901,0,0,null],
    [46000,0,3,null],
    [46001,1,0,null],
    [46002,0,0,null],
    [46100,0,1,null],
    [46101,0,0,null],
    [46200,0,1,null],
    [46201,0,0,null],
    [46300,0,1,null],
    [46301,0,0,null],
    [46400,0,1,null],
    [46401,0,0,null],
    [46500,0,2,null],
    [46501,0,0,null],
    [46600,0,1,null],
    [46601,0,0,null],
    [46700,0,1,null],
    [46701,0,0,null],
    [46800,0,1,null],
    [46801,0,0,null],
    [46900,0,1,null],
    [46901,0,0,null],
    [47000,0,3,null],
    [47001,1,0,null],
    [47002,0,0,null],
    [47100,0,1,null],
    [47101,0,0,null],
    [47200,0,1,null],
    [47201,0,0,null],
    [47300,0,1,null],
    [47301,0,0,null],
    [47400,0,1,null],
    [47401,0,0,null],
    [47500,0,2,null],
    [47501,0,0,null],
    [47600,0,1,null],
    [47601,0,0,null],
    [47700,0,1,null],
    [47701,0,0,null],
    [47800,0,1,null],
    [47801,0,0,null],
    [47900,0,1,null],
    [47901,0,0,null],
    [48000,0,3,null],
    [48001,1,0,null],
    [48002,0,0,null],
    [48100,0,1,null],
    [48101,0,0,null],
    [48200,0,1,null],
    [48201,0,0,null],
    [48300,0,1,null],
    [48301,0,0,null],
    [48400,0,1,null],
    [48401,0,0,null],
    [48500,0,2,null],
    [48501,0,0,null],
    [48600,0,1,null],
    [48601,0,0,null],
    [48700,0,1,null],
    [48701,0,0,null],
    [48800,0,1,null],
    [48801,0,0,null],
    [48900,0,1,null],
    [48901,0,0,null],
    [49000,0,3,null],
    [49001,1,0,null],
    [49002,0,0,null],
    [49100,0,1,null],
    [49101,0,0,null],
    [49200,0,1,null],
    [49201,0,0,null],
    [49300,0,1,null],
    [49301,0,0,null],
    [49400,0,1,null],
    [49401,0,0,null],
    [49500,0,2,null],
    [49501,0,0,null],
    [49600,0,1,null],
    [49601,0,0,null],
    [49700,0,1,null],
    [49701,0,0,null],
    [49800,0,1,null],
    [49801,0,0,null],
    [49900,0,1,null],
    [49901,0,0,null],
    [50000,0,3,null],
    [50001,1,0,null]
];