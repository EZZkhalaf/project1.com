import javax.swing.*;
import java.util.Scanner;
import javax.swing.*;
public class Main {
    public static void main(String[] args) {


        Scanner input = new Scanner(System.in);
        char [] userInput= new char[800];
        int index = 0;
        while(true) {
            System.out.print("enter the character: ");
            char chr = input.next().charAt(0);

            if(chr == '*') break;


            if (index < userInput.length) {
                userInput[index] = chr;
                index++;
            } else {
                System.out.println("array is full");
                break;
            }
        }

        int[] frequency = new int[256];//the same number for the ascii character

        for(int i =0 ;i<index; i++){
            frequency[(int) userInput[i]]++;
        }

        char largestFreq = '\0';
        int maxFreq = 0;
        for (int i =0 ; i< 256 ; i++){
            if(frequency[i]>maxFreq){
                maxFreq = frequency[i];
                largestFreq = (char) i ; //convert from number into char (ascii)
            }
        }

        ImageIcon icon = new ImageIcon(Main.class.getResource("Computer11.png"));


        if (maxFreq > 0) {
            JOptionPane.showMessageDialog(null,
                    "The most frequent character is: " + largestFreq +
                            "\nIt appeared " + maxFreq + " times."
                            ,"The Answer"
                    ,JOptionPane.PLAIN_MESSAGE
                    ,icon
            );

        } else {
            JOptionPane.showMessageDialog(null, "No characters were entered.");
        }

    }
}