## 1. Datasets Used

| Dataset | Attacks Included | Features | Records | Link |
| :--- | :--- | :--- | :--- | :--- |
| **DDoS-Sandbox** | BENIGN, DoS Hulk, DoS slowloris, GoldenEye, Hulken | 78 | 821,063 | [Zenodo](https://zenodo.org/records/15703855) |
| **CIC-DDoS2019 (Wednesday Working Hours)** | BENIGN, DoS Hulk, GoldenEye, slowloris, Slowhttptest, Heartbleed | 79 | 692,703 | [CIC Datasets](https://www.unb.ca/cic/datasets/ddos-2019.html) |
| **CSE-CIC-IDS2018 – DoS1 Thursday** | Benign, GoldenEye, Slowloris | 78 | 794,812 | [CIC IDS2018](https://www.unb.ca/cic/datasets/ids-2018.html) |
| **CSE-CIC-IDS2018 – DoS2 Friday** | Benign, Hulk, SlowHTTPTest | 78 | 591,873 | [CIC IDS2018](https://www.unb.ca/cic/datasets/ids-2018.html) |

---

## 2. Low-Rate DoS (LDDoS) Attack Breakdown

| Attack Type  | Target Dataset | Count  |
| :--- | :--- | :--- |
| **DoS slowloris** | CIC Wednesday WorkingHours | 5,796 |
| **DoS Slowhttptest** | CIC Wednesday WorkingHours | 5,499 |
| **DoS slowloris & Slowloris** | DDoS Sandbox (train_sandbox_v3) | 128,717 *(128,612 + 105)* |
| **DoS attacks-Slowloris** | CSE-CIC-IDS2018 - DoS1 Thursday | 9,908 |
| **DoS attacks-SlowHTTPTest** | CSE-CIC-IDS2018 - DoS2 Friday | 55 |
| **Total Tracked Low-Rate Instances** | *Combined Datasets* | **149,975** |
