export {};

interface Value {}

export interface IntValue extends Value {
  intVal: number; // 10
  mapVal: any[];
}

export interface Point<Val extends Value> {
  startTimeNanos: string; // "1695441634925090130"
  endTimeNanos: string; // "1695441694925090130"
  dataTypeName: string; // "com.google.step_count.delta",
  originDataSourceId: string; // "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
  value: Val[];
}

export interface Dataset<Val extends Value> {
  dataSourceId: string;
  point: Point<Val>[];
}

export interface Bucket<Val extends Value = Value> {
  startTimeMillis: number;
  endTimeMillis: number;
  dataset: Dataset<Val>[];
}

export interface EstimatedStepsBucket extends Bucket<IntValue> {}

export interface FitnessResponse<B extends Bucket> {
  bucket: B[];
}

// {
//     "bucket": [
//         {
//             "startTimeMillis": "1695427200000",
//             "endTimeMillis": "1695513600000",
//             "dataset": [
//                 {
//                     "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
//                     "point": [
//                         {
//                             "startTimeNanos": "1695441634925090130",
//                             "endTimeNanos": "1695441694925090130",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 10,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695441695946235277",
//                             "endTimeNanos": "1695441755946235277",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 29,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695441755946235277",
//                             "endTimeNanos": "1695441761680504344",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 7,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695442621364590445",
//                             "endTimeNanos": "1695442681364590445",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 12,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695443140663294542",
//                             "endTimeNanos": "1695443208663296590",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 34,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695443208663296590",
//                             "endTimeNanos": "1695443640245010027",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 358,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695443640245010027",
//                             "endTimeNanos": "1695444043094001471",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 224,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695446227629854865",
//                             "endTimeNanos": "1695446425629855889",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 99,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695446425629855889",
//                             "endTimeNanos": "1695446617975128750",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 195,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695446715876517604",
//                             "endTimeNanos": "1695446775876517604",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 27,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695447455247471913",
//                             "endTimeNanos": "1695447527247476009",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 36,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695447527247476009",
//                             "endTimeNanos": "1695447775699180770",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 177,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695447775699180770",
//                             "endTimeNanos": "1695447834031956706",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 91,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695449531507818070",
//                             "endTimeNanos": "1695449745507827286",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 107,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695449745507827286",
//                             "endTimeNanos": "1695449833721709906",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 56,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695449833721709906",
//                             "endTimeNanos": "1695449890209502899",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 22,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695450397831155735",
//                             "endTimeNanos": "1695450491831160855",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 47,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695450491831160855",
//                             "endTimeNanos": "1695450671057016952",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 128,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695450671057016952",
//                             "endTimeNanos": "1695450715121201912",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 54,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695450715121201912",
//                             "endTimeNanos": "1695450771024308838",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 49,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695450771024308838",
//                             "endTimeNanos": "1695450778538938607",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 11,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695450778538938607",
//                             "endTimeNanos": "1695450998302910917",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 118,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695451267620508205",
//                             "endTimeNanos": "1695451357620507181",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 45,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695451398996707351",
//                             "endTimeNanos": "1695451490996709399",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 46,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695451490996709399",
//                             "endTimeNanos": "1695451500996718813",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 11,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695451787113805144",
//                             "endTimeNanos": "1695451873113806168",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 43,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695451873113806168",
//                             "endTimeNanos": "1695452047096335846",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 111,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695452347017126689",
//                             "endTimeNanos": "1695452621017129761",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 137,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695452742596112397",
//                             "endTimeNanos": "1695452802596112397",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 13,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695453036815456205",
//                             "endTimeNanos": "1695453300815468493",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 132,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695453300815468493",
//                             "endTimeNanos": "1695453311312102930",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 19,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695453631093064777",
//                             "endTimeNanos": "1695453691093064777",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 20,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695458306596146476",
//                             "endTimeNanos": "1695458538596142380",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 116,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695458538596142380",
//                             "endTimeNanos": "1695458564854079700",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 43,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695458564854079700",
//                             "endTimeNanos": "1695458646346494493",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 111,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695458653199674145",
//                             "endTimeNanos": "1695458791199681313",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 69,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695458791199681313",
//                             "endTimeNanos": "1695458930136734121",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 91,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695458930136734121",
//                             "endTimeNanos": "1695459287673113221",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 314,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695459287673113221",
//                             "endTimeNanos": "1695459296913390272",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 14,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695459431402524518",
//                             "endTimeNanos": "1695459549402533734",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 59,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695459589120809774",
//                             "endTimeNanos": "1695459649120809774",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 26,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695459754162636399",
//                             "endTimeNanos": "1695459818162640495",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 32,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695459818162640495",
//                             "endTimeNanos": "1695459828673813928",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 12,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695459830457300435",
//                             "endTimeNanos": "1695459890457302483",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 30,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695459890457302483",
//                             "endTimeNanos": "1695459917826479403",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 47,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695459917826479403",
//                             "endTimeNanos": "1695460085051673304",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 223,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695460085051673304",
//                             "endTimeNanos": "1695460136949874663",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 72,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695460136949874663",
//                             "endTimeNanos": "1695460140573438240",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 2,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695460140573438240",
//                             "endTimeNanos": "1695460223919227026",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 46,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695460223919227026",
//                             "endTimeNanos": "1695460289117681813",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 95,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695460357970294235",
//                             "endTimeNanos": "1695460555970295259",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 99,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695460555970295259",
//                             "endTimeNanos": "1695460597129961598",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 75,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695460640792918538",
//                             "endTimeNanos": "1695460810792925706",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 85,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695460810792925706",
//                             "endTimeNanos": "1695460837038659124",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 41,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695460865555910988",
//                             "endTimeNanos": "1695460997555917132",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 66,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695460997555917132",
//                             "endTimeNanos": "1695461193014710267",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 132,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695461193014710267",
//                             "endTimeNanos": "1695461209559258990",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 20,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695461588107244432",
//                             "endTimeNanos": "1695461674107245456",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 43,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695461674107245456",
//                             "endTimeNanos": "1695461709917556164",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 11,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695462029091061620",
//                             "endTimeNanos": "1695462109091069812",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 40,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695462412701225159",
//                             "endTimeNanos": "1695462472701225159",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 13,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695462684881059000",
//                             "endTimeNanos": "1695462744881059000",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 11,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695462813787022787",
//                             "endTimeNanos": "1695462971787027907",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 79,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695463100079316912",
//                             "endTimeNanos": "1695463190079315888",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 45,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695463216706174507",
//                             "endTimeNanos": "1695463280706178603",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 32,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695463325028228110",
//                             "endTimeNanos": "1695463511028227086",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 93,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695463511028227086",
//                             "endTimeNanos": "1695463532028443442",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 41,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695463532028443442",
//                             "endTimeNanos": "1695463590289131331",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 60,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695463590289131331",
//                             "endTimeNanos": "1695463646705599370",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 63,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695463646705599370",
//                             "endTimeNanos": "1695463666255903014",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 36,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695463694497466664",
//                             "endTimeNanos": "1695463754497466664",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 19,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695467309562726791",
//                             "endTimeNanos": "1695467369562726791",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 29,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695467606202962512",
//                             "endTimeNanos": "1695467946202976848",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 170,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695467946202976848",
//                             "endTimeNanos": "1695467997568787542",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 76,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695468154331164337",
//                             "endTimeNanos": "1695468214331164337",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 21,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695469704236874979",
//                             "endTimeNanos": "1695469764236874979",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 14,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695469849100355740",
//                             "endTimeNanos": "1695469919100356764",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 35,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695469919100356764",
//                             "endTimeNanos": "1695470011781267794",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 58,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695470011781267794",
//                             "endTimeNanos": "1695470020867126491",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 11,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695470020867126491",
//                             "endTimeNanos": "1695470111414031550",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 60,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695470111414031550",
//                             "endTimeNanos": "1695470127722962402",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 22,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695470141418577931",
//                             "endTimeNanos": "1695470201418577931",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 28,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695470207214223624",
//                             "endTimeNanos": "1695470269214224648",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 31,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695470370311454265",
//                             "endTimeNanos": "1695470436311457337",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 33,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695470436311457337",
//                             "endTimeNanos": "1695470461022775178",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 45,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695470910094320080",
//                             "endTimeNanos": "1695471044094329296",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 67,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695471044094329296",
//                             "endTimeNanos": "1695471103043780534",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 27,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695471143108044088",
//                             "endTimeNanos": "1695471255108052280",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 56,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695471255108052280",
//                             "endTimeNanos": "1695471324547984725",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 81,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695472526199369024",
//                             "endTimeNanos": "1695472764199382336",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 119,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695473254964208754",
//                             "endTimeNanos": "1695473354964206706",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 50,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695473385381704151",
//                             "endTimeNanos": "1695473445381704151",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 18,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695473739400298381",
//                             "endTimeNanos": "1695473799400298381",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 29,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695473826150090425",
//                             "endTimeNanos": "1695473886150090425",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 13,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695474827807994684",
//                             "endTimeNanos": "1695475063808013116",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 118,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695475063808013116",
//                             "endTimeNanos": "1695475069156279826",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 9,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695475078639920596",
//                             "endTimeNanos": "1695475178639918548",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 50,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695475963951674165",
//                             "endTimeNanos": "1695476023951674165",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 28,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695476023951674165",
//                             "endTimeNanos": "1695476028468681163",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 5,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695476028468681163",
//                             "endTimeNanos": "1695476395573142383",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 304,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695476430653929973",
//                             "endTimeNanos": "1695476490653929973",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 8,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695476834484216744",
//                             "endTimeNanos": "1695476894484216744",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 29,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695481197914899214",
//                             "endTimeNanos": "1695481283914900238",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 43,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695481283914900238",
//                             "endTimeNanos": "1695481479638748899",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 222,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695481479638748899",
//                             "endTimeNanos": "1695481613535628301",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 157,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695481613535628301",
//                             "endTimeNanos": "1695481618538441517",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 9,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695481618538441517",
//                             "endTimeNanos": "1695481866540402599",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 375,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695481866540402599",
//                             "endTimeNanos": "1695481871781377008",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 14,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695481893306598653",
//                             "endTimeNanos": "1695482159306605821",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 133,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695482159306605821",
//                             "endTimeNanos": "1695482163509046869",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 4,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695482163509046869",
//                             "endTimeNanos": "1695482241039186620",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 55,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695482280017996152",
//                             "endTimeNanos": "1695482340017996152",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 23,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695482697765864031",
//                             "endTimeNanos": "1695482757765864031",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 13,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695483131234687414",
//                             "endTimeNanos": "1695483191234687414",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 13,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695483514851651946",
//                             "endTimeNanos": "1695483574851651946",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 12,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695483967553072899",
//                             "endTimeNanos": "1695484065553075971",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 49,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695490727885236551",
//                             "endTimeNanos": "1695490787885236551",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 17,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695490892840769914",
//                             "endTimeNanos": "1695490952840771962",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 30,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695491002090189904",
//                             "endTimeNanos": "1695491090090194000",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 44,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695491105431791015",
//                             "endTimeNanos": "1695491175431792039",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 35,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695491175431792039",
//                             "endTimeNanos": "1695491269078260113",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 125,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695491269078260113",
//                             "endTimeNanos": "1695491279134293917",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 19,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695491279134293917",
//                             "endTimeNanos": "1695491541537901832",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 210,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695491541537901832",
//                             "endTimeNanos": "1695491650090030508",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 120,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695497663460038958",
//                             "endTimeNanos": "1695497667823553093",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 4,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695499838972990854",
//                             "endTimeNanos": "1695499898972990854",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 20,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695499898972990854",
//                             "endTimeNanos": "1695500022343282101",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 131,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695500022343282101",
//                             "endTimeNanos": "1695500042008403352",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 20,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695500042008403352",
//                             "endTimeNanos": "1695500070305409526",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 12,
//                                     "mapVal": []
//                                 }
//                             ]
//                         },
//                         {
//                             "startTimeNanos": "1695500070305409526",
//                             "endTimeNanos": "1695500083246234093",
//                             "dataTypeName": "com.google.step_count.delta",
//                             "originDataSourceId": "raw:com.google.step_count.cumulative:Xiaomi:2201116TG:b0470fd8:STEP_COUNTER",
//                             "value": [
//                                 {
//                                     "intVal": 12,
//                                     "mapVal": []
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
// }
