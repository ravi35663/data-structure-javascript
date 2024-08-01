/*
==> Number System:-
    Decimal     Binary      Octal       Hexadecimal
    0           00          0           0
    1           01          1           1
    2           10          2           2
    3           11          3           3
    4           100         4           4
    5           101         5           5
    6           110         6           6
    7           111         7           7
    8           1000        10          8
    9           1001        11          9
    10          1010        12          A
    11          1011        13          B
    12          1100        14          C
    13          1101        15          D
    14          1110        16          E
    15          1111        17          F
    16          10000       20          10
*/
//Number conversion
/*
    Binary To decimal
    1) 110011 => (51)(base 10)
       (1 * 2^5) + (1*2^4) + (0 * 2^3) + (0*2^2) + (1 * 2^1) + (1* 2^0) 
       32 + 16 + 0 + 0 + 2 +1 => 51
*/

/*
    Decimal To Binary
    1) 52
    
    Divide By       Number      remainder
    2               52              0
    2               26              0
    2               13              1
    2               6               0
    2               3               1    
    2               1               1

    concatenate remainder from bottom to top
    Here decimal is (52) and binary of the number is (110100) 
*/

/*
    => Octal To decimal
    -> Just like binary to decimal
    1) (12367)8
    => (1 * 8^4) + (2 * 8^3) + (3 * 8^2) + (6 * 8^1) + (7 * 8^0)
      4096 + 1024 + 384 + 128 + 48 + 7 => (5697)10  
*/

/*
==> Binary Addition :-
    0 + 0 = 0
    0 + 1 = 1
    1 + 0 = 1
    1 + 1 = 10 (1 carry moved to top left side)
*/

/*
==> Some important mathematical formulas
    1) Binomial Coefficient : (n!/(r!(n-r)!))
    
    2) “ravi” + “ kumar” => “ravi kumar”

    3) Perfect Number :- 
        Sum of number of its proper divisor is equal to that number 
        (e.g. 6 => 1 + 2 + 3 == 6 ..etc)
    
    4) Strong Number :- 
        A strong number is equal to the sum of factorial of its digits
        i.e.  (145 = 1! + 4! + 5! == 1 + 24 + 120 == 145)
    
    5) Armstrong number : - 
       An Armstrong number is the sum of the power of the digits with the total number 
       of digits. 
          example 1: 
                xyz -> number of digits is 3
	            power(x,3) + power(y,3) + power(z,3) 
          example 2: 
          wxyz  -> number of digits is 4
	      power(w,4) + power(x,4) + power(y,4) + power(z,4);
    6) ‘A’ -> 65 , ‘Z’ -> 90 , ‘a’-> 97 , ‘z’-> 128 , ‘0’(Zero)-> 48,’9’-> 57

    7) Each character is of 1 byte (8 bits) 
    8) Any 0 value is treated as false in javascript while any non-zero value is 
       treated as true.
    9) 1 Byte is minimum size of the bucket that is why boolean always consume 1 byte 
       memory instead of 1 bit (0 or 1)
       e.g bool is_delete = true;

    10) Prime Number : - divided by 1 or self
        e.g 2,3,5,7,11 ..etc
        30 -> 
        2  * 15 = 30
        3  * 10 = 30
        5  * 6  = 30
        (a)  (b) --> here a is smaller divisor and b is bigger divisor 
        -> we only need to check the number in “sqrt(n)” not in “n
        -> function isPrime(int n){
            for(int i=2 i*i<=n;i++){
                if(n%i == 0){
                    return false
                }
            }
            return true;
        }
        ->  T.C = O(LogN)
*/

/*
    ==> Binary To Gray conversion
        -> (B3B2B1)(Binary Code) == (B3(B3^B2)(B2^B1))(Gray code)
        -> here '^' is xor
    
    ==> Gray to Binary conversion:
        -> (G1G2G3)(Gray Code) = (G1(G1+G2)(G1+G2+G3))(Binary code)
        -> here '+' us binary sum sign
*/

/*
    GP(Geometric progression) series:
        -> 1,2,4,8,16......r^(n-1)
        -> An = a * r^(n-1)
        -> Sn = (a * (1-r^n)) / (1-r)
        -> Here r != 1 and r = ratio (2/1 or 4/2 or T(n+1)/Tn)
*/

/*
    ==> LCM and HCF(GCD)
        -> LCM (Least common multiplication)
            A = 20
            B = 3
            Here LCM is 60 because only 60 can be divisible by both 20 and 3.

        -> HCF (Highest common factor) or GCD (Greatest common divisor)
            A = 12
        	B = 15 
	        Here GCD will be 3 because 3 is common divisor of both 12 and 15 and it 
            greatest one.

        -> LCM(a,b) = a * b / GCD(a,b)

        -> GCD(Euclidean Algorithm):
            1) Given two numbers a & b, where a greater or equal to b. 
               Repeatedly divide a by b;
            2) If remainder r is equal to zero then b would be the gcd.
            3) If remainder is not equal to zero then replace a by b and set b to 
              remainder r.
            4) Then repeat the step 1
*/

/*
==> Areas :-
    -> Area of Triangle = ( base * height ) / 2
    -> Area of the circle = PI * r * r;
    -> Area of the rectangle = base * height;
    -> Area of Triangle Having 3 sides (a,b,c):
	    P = (a+b+c) (perimeter)
	    S = P/2 (Semi-perimeter)
	    A = sqrt(s(s-a)(s-b)(s-c));
*/

/*
==> Colors:
    -> RGB : - (RGB) 
	-> Red -> 0 to 255 (range max) (255,0,0)
	-> Green -> 0 to 255 (range max) (0,255,0)
	-> Blue -> 0 to 255 (range max) (0,0,255)
	-> Black -> (0,0,0)
	-> White -> (255,255,255) (RGB)
	-> 4MB image --> row * column * 3(3 is RGB) * 8 bits
    -> 255 is maximum space of a color
    -> sequence of images is known as video .
    -> image is 3d object (colored image black and white is 3d image)
    -> if we add another dimension ‘which is time’ to image then it become 4d image
        which is a video.
    -> video is a 4d matrix .
*/
