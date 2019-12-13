import re

def forArgument(args):
	[name,start,end,dec] = args
	a = name if name !='' else 'i'
	b = start if start != '' else '1'
	c = end if end != '' else 'n'
	d = '++' + a
	if dec == '-':
	    d = '--' + a
	compare_flag = '<=' if d[0] =='+' else '>='
	return "{i}={start};{i}{compare_flag}{end};{inc}".format(i=a,start=b,end=c,inc=d,compare_flag=compare_flag)

reg = re.compile( "f(\w*) *([\S]*) +(\S+) *(-*)")
words = [
        "fi 1 3 -",
        "fi 1 3 ",
        "fik 1 3",
        "f 1 3",
        "f 3",
        "f 3 -",
        "fi board[idx].y1 board[idx].y2"
        ]
for word in words:
    m = reg.match(word)
    print(m.groups())
    print(forArgument(m.groups()))

