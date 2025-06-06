import { Exchange } from '../types/types';

export const exchanges: Exchange[] = [
  {
    name: 'Binance',
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZmlsbD0iI2YwYjkwYiIgZD0iTTE2IDMyQzcuMTYzIDMyIDAgMjQuODM3IDAgMTZTNy4xNjMgMCAxNiAwczE2IDcuMTYzIDE2IDE2LTcuMTYzIDE2LTE2IDE2em0tLjA2NC04LjY0bDMuMDIxIDMuMDIgNy4wNzgtNy4wODQtMy4wMi0zLjAyLTQuMDU4IDQuMDU4LTQuMDU3LTQuMDU4LTMuMDIgMy4wMiA3LjA1NiA3LjA2NHptLTcuMDc4LTQuMDU3bDMuMDIxIDMuMDIgMy4wMi0zLjAyLTMuMDItMy4wMjEtMy4wMjEgMy4wMnptMTQuMTM1IDBsMy4wMiAzLjAyIDMuMDItMy4wMi0zLjAyLTMuMDIxLTMuMDIgMy4wMnptLTcuMDU3LTcuMDU3bDMuMDIgMy4wMiAzLjAyLTMuMDItMy4wMi0zLjAyLTMuMDIgMy4wMnoiLz48L3N2Zz4=',
    volume: '$12.4B',
    pairs: '740+',
    price: '$45,123.45',
    status: 'active',
    badge: {
      text: 'Popular',
      color: 'linear-gradient(45deg, #f0b90b, #f8d33a)',
      textColor: '#000'
    }
  },
  {
    name: 'KuCoin',
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZmlsbD0iIzIzQkY3NiIgZD0iTTE2IDMyQzcuMTYzIDMyIDAgMjQuODM3IDAgMTZTNy4xNjMgMCAxNiAwczE2IDcuMTYzIDE2IDE2LTcuMTYzIDE2LTE2IDE2em0wLTI2Ljk4NWMtNi4wNDYgMC0xMC45ODYgNC45NC0xMC45ODYgMTAuOTg1UzkuOTU0IDI2Ljk4NSAxNiAyNi45ODVzMTAuOTg2LTQuOTQgMTAuOTg2LTEwLjk4NVMyMi4wNDYgNS4wMTUgMTYgNS4wMTV6bS0uOTg0IDEyLjk4M2wtMy4wMTMtMy4wMTMgMS40MTQtMS40MTQgMS41OTkgMS41OTkgNS4zOTgtNS4zOTggMS40MTQgMS40MTQtNi44MTIgNi44MTJ6Ii8+PC9zdmc+',
    volume: '$5.8B',
    pairs: '580+',
    price: '$45,098.32',
    status: 'ready'
  },
  {
    name: 'Coinbase',
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZmlsbD0iIzAwNTJGRiIgZD0iTTE2IDMyQzcuMTYzIDMyIDAgMjQuODM3IDAgMTZTNy4xNjMgMCAxNiAwczE2IDcuMTYzIDE2IDE2LTcuMTYzIDE2LTE2IDE2em0wLTI4QzkuMzY4IDQgNCAxMC4zNjggNCAxN3M1LjM2OCAxMiAxMiAxMiAxMi01LjM2OCAxMi0xMlMyMi42MzIgNCAxNiA0em0zLjU4MiAxNS45NTNjLS4xNTUuMzYtLjQyLjY1NC0uNzg0Ljg3NC0uMzYzLjIyLS44MjUuMzMtMS4zNjMuMzMtLjYxIDAtMS4xNS0uMTYtMS42Mi0uNDgzLS40Ny0uMzIyLS43OTgtLjc5My0uOTg0LTEuNDFsMS44NS0uNzY1Yy4wOTQuMjY3LjIyNy40NjYuMzk4LjU5OC4xNy4xMzIuMzY4LjE5OC41OTIuMTk4LjIyIDAgLjQwNi0uMDQ3LjU1OC0uMTQyLjE1Mi0uMDk0LjIyOC0uMjI3LjIyOC0uNHYtNi4xMzhoMi4xMjV2Ni4zMzh6bS0xLjg4Mi04LjQ2N2MtLjUxNi0uNDctMS4xMy0uNzA0LTEuODQtLjcwNC0uNzEgMC0xLjMyNC4yMzQtMS44NC43MDQtLjUxNi40Ny0uNzc1IDEuMDQzLS43NzUgMS43MnMuMjU4IDEuMjUyLjc3NSAxLjcyYy41MTYuNDcgMS4xMy43MDQgMS44NC43MDQuNzEgMCAxLjMyNC0uMjM0IDEuODQtLjcwNC41MTYtLjQ3Ljc3NS0xLjA0My43NzUtMS43MnMtLjI1OC0xLjI1Mi0uNzc1LTEuNzJ6TTEwLjk1MyAxOC42M2MtLjYxIDAtMS4xNS0uMTYtMS42Mi0uNDgzLS40Ny0uMzIyLS43OTgtLjc5My0uOTg0LTEuNDFsMS44NS0uNzY1Yy4wOTQuMjY3LjIyNy40NjYuMzk4LjU5OC4xNy4xMzIuMzY4LjE5OC41OTIuMTk4LjIyIDAgLjQwNi0uMDQ3LjU1OC0uMTQyLjE1Mi0uMDk0LjIyOC0uMjI3LjIyOC0uNHYtNi4xMzhoMi4xMjV2Ni4zMzhjLS4xNTUuMzYtLjQyLjY1NC0uNzg0Ljg3NC0uMzYzLjIyLS44MjUuMzMtMS4zNjMuMzN6TTkuMjM0IDkuODg3Yy41MTYuNDcgMS4xMy43MDQgMS44NC43MDQuNzEgMCAxLjMyNC0uMjM0IDEuODQtLjcwNC41MTYtLjQ3Ljc3NS0xLjA0My43NzUtMS43MnMtLjI1OC0xLjI1Mi0uNzc1LTEuNzJjLS41MTYtLjQ3LTEuMTMtLjcwNC0xLjg0LS43MDQtLjcxIDAtMS4zMjQuMjM0LTEuODQuNzA0LS41MTYuNDctLjc3NSAxLjA0My0uNzc1IDEuNzJzLjI1OCAxLjI1Mi43NzUgMS43MnoiLz48L3N2Zz4=',
    volume: '$8.2B',
    pairs: '420+',
    price: '$45,156.78',
    status: 'ready',
    badge: {
      text: 'US',
      color: 'linear-gradient(45deg, #1da1f2, #4dabf5)',
      textColor: 'white'
    }
  },
  {
    name: 'Crypto.com',
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZmlsbD0iIzAwMzNhZCIgZD0iTTE2IDMyQzcuMTYzIDMyIDAgMjQuODM3IDAgMTZTNy4xNjMgMCAxNiAwczE2IDcuMTYzIDE2IDE2LTcuMTYzIDE2LTE2IDE2em0tLjAxOC03LjkwM2wzLjA3LTEuNzc0YS43NzIuNzcyIDAgMCAwIC4zODYtLjY3MlYxMi4zNWEuNzcyLjc3MiAwIDAgMC0uMzg2LS42NzJsLTMuMDctMS43NzRhLjc3Mi43NzIgMCAwIDAtLjc3MiAwbC0zLjA3IDEuNzc0YS43NzIuNzcyIDAgMCAwLS4zODYuNjcydjcuMzAxYzAgLjI3Ny4xNDYuNTM0LjM4Ni42NzJsMy4wNyAxLjc3NGEuNzcyLjc3MiAwIDAgMCAuNzcyIDB6bS0yLjUwMi0yLjQ0NmMwIC4wNjktLjAzNS4xMDQtLjEwNC4xMDRoLS40MTRjLS4wNyAwLS4xMDQtLjAzNS0uMTA0LS4xMDR2LTUuMjA4YzAtLjA3LjAzNC0uMTA0LjEwNC0uMTA0aC40MTRjLjA2OSAwIC4xMDQuMDM1LjEwNC4xMDR2NS4yMDh6bTEuNTU0IDBjMCAuMDY5LS4wMzUuMTA0LS4xMDQuMTA0aC0uNDE0Yy0uMDcgMC0uMTA0LS4wMzUtLjEwNC0uMTA0di01LjIwOGMwLS4wNy4wMzQtLjEwNC4xMDQtLjEwNGguNDE0Yy4wNjkgMCAuMTA0LjAzNS4xMDQuMTA0djUuMjA4em0xLjU1NCAwYzAgLjA2OS0uMDM1LjEwNC0uMTA0LjEwNGgtLjQxNGMtLjA3IDAtLjEwNC0uMDM1LS4xMDQtLjEwNHYtNS4yMDhjMC0uMDcuMDM0LS4xMDQuMTA0LS4xMDRoLjQxNGMuMDY5IDAgLjEwNC4wMzUuMTA0LjEwNHY1LjIwOHoiLz48L3N2Zz4=',
    volume: '$3.7B',
    pairs: '250+',
    price: '$45,087.65',
    status: 'ready'
  },
  {
    name: 'OKX',
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZmlsbD0iIzIxNmZlYSIgZD0iTTE2IDMyQzcuMTYzIDMyIDAgMjQuODM3IDAgMTZTNy4xNjMgMCAxNiAwczE2IDcuMTYzIDE2IDE2LTcuMTYzIDE2LTE2IDE2em0tNy4xMDUtMTAuMDI1YzAgMi42MjUgMi4xMjMgNC43NSA0Ljc0OCA0Ljc1czQuNzQ4LTIuMTI1IDQuNzQ4LTQuNzUtMi4xMjMtNC43NS00Ljc0OC00Ljc1LTQuNzQ4IDIuMTI1LTQuNzQ4IDQuNzV6bTkuNDk1IDBjMCAyLjYyNSAyLjEyMyA0Ljc1IDQuNzQ4IDQuNzVzNC43NDgtMi4xMjUgNC43NDgtNC43NS0yLjEyMy00Ljc1LTQuNzQ4LTQuNzUtNC43NDggMi4xMjUtNC43NDggNC43NXptLTkuNDk1LTkuNDk1YzAgMi42MjUgMi4xMjMgNC43NSA0Ljc0OCA0Ljc1czQuNzQ4LTIuMTI1IDQuNzQ4LTQuNzUtMi4xMjMtNC43NS00Ljc0OC00Ljc1LTQuNzQ4IDIuMTI1LTQuNzQ4IDQuNzV6bTkuNDk1IDBjMCAyLjYyNSAyLjEyMyA0Ljc1IDQuNzQ4IDQuNzVzNC43NDgtMi4xMjUgNC43NDgtNC43NS0yLjEyMy00Ljc1LTQuNzQ4LTQuNzUtNC43NDggMi4xMjUtNC43NDggNC43NXoiLz48L3N2Zz4=',
    volume: '$4.9B',
    pairs: '350+',
    price: '$45,112.89',
    status: 'ready',
    badge: {
      text: 'New',
      color: 'linear-gradient(45deg, #0ecb81, #0bb974)',
      textColor: 'white'
    }
  },
  {
    name: 'Gate.io',
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZmlsbD0iI2Y0YjgwYiIgZD0iTTE2IDMyQzcuMTYzIDMyIDAgMjQuODM3IDAgMTZTNy4xNjMgMCAxNiAwczE2IDcuMTYzIDE2IDE2LTcuMTYzIDE2LTE2IDE2em0tNS40NjYtMTIuNzY2YzAgMy4yNTUgMi42NCA1Ljg5NiA1Ljg5NiA1Ljg5NnM1Ljg5Ni0yLjY0IDUuODk2LTUuODk2LTIuNjQtNS44OTYtNS44OTYtNS44OTYtNS44OTYgMi42NC01Ljg5NiA1Ljg5NnptNS44OTYtMy45M2MyLjE3IDAgMy45MyAxLjc2IDMuOTMgMy45M3MtMS43NiAzLjkzLTMuOTMgMy45My0zLjkzLTEuNzYtMy45My0zLjkzIDEuNzYtMy45MyAzLjkzLTMuOTN6bTAgMS45NjVjLTEuMDg1IDAtMS45NjUuODgtMS45NjUgMS45NjVzLjg4IDEuOTY1IDEuOTY1IDEuOTY1IDEuOTY1LS44OCAxLjk2NS0xLjk2NS0uODgtMS45NjUtMS45NjUtMS45NjV6Ii8+PC9zdmc+',
    volume: '$2.8B',
    pairs: '280+',
    price: '$45,076.21',
    status: 'ready'
  }
];