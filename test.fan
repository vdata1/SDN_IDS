<start> ::= <scenario>

<scenario> ::= "protocol:" <protocol> ", \n packet_size:" <packet_size> ", \n rate:" <rate> ", \n burst:" <burst> ", \n gap:" <gap> ", \n duration:" <duration>

<protocol> ::= "TCP" | "UDP"

<packet_size> ::= <num_pkt>
<num_pkt> ::= r'[6-9][0-9]' | r'[1-9][0-9]{2}' | r'1[0-3][0-9]{2}' | '1400'

<rate> ::= <num_rate>
<num_rate> ::= r'[1-9][0-9]?' | '100'

<burst> ::= <num_burst>
<num_burst> ::= r'[1-9][0-9]{2,4}'

<gap> ::= <num_gap>
<num_gap> ::= r'[1-9][0-9]{2,3}' | '1000' | '2000' | '3000' | '4000' | '5000'

<duration> ::= <num_dur>
<num_dur> ::= r'[1-5][0-9]' | '10' | '60'

where int(<burst>) > int(<rate>)
where int(<packet_size>) >= 64 and int(<packet_size>) <= 1400
where int(<rate>) >= 1 and int(<rate>) <= 100
where int(<gap>) >= 100 and int(<gap>) <= 5000
where int(<duration>) >= 10 and int(<duration>) <= 60
