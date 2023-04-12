package input_dialogbox;


import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.Window;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.SwingUtilities;

public class input  {
	

	public static void main(String[] args) {
		
		
		JFrame frame=new JFrame();
		
		JTextField name = new JTextField();
		JTextField age = new JTextField();
		JTextField email = new JTextField();
		JTextArea message =new JTextArea();
		JTextField phone =  new JTextField();
		
		
		
		
		// TODO Auto-generated method stub
		
			JLabel namet = new JLabel();
			namet.setText("NAME :");
			JLabel aget = new JLabel();
			aget.setText("AGE :");
			
			JLabel emailt= new JLabel();
			emailt.setText("EMAIL :");
			JLabel messaget = new JLabel();
			messaget.setText("TYPE MESSAGE :");
			JLabel phonet = new JLabel();
			phonet.setText("PHONE NUMBER :");
			
			
			JButton submit = new JButton();
//			submit.setSize(50, 50);
			submit.setText("-SUBMIT-");
			submit.addActionListener(null);
			
//			JOptionPane input= new JOptionPane();
			
//			name.setSize(70, 500);
			
			
			   submit.addActionListener(e -> {
				      Window parentWindow = SwingUtilities.windowForComponent(submit);
				      JDialog dialog = new JDialog(parentWindow);
//				      dialog.setLocationRelativeTo(submit);
//				      dialog.setModal(true);
				      JLabel ll = new JLabel("<html>"+"NAME : " + name.getText().toString() + "<br/>"+" AGE : "+ age.getText().toString()+ "<br/> PHONE NUMBER : "+ phone.getText().toString() +  "<br/> EMAIL : " + email.getText().toString()+ "<br/> MESSAGE : "+ message.getText().toString()+"</html>");
				      ll.setAlignmentX(50);
				      ll.setAlignmentY(50);
				      dialog.add(ll);
				      dialog.setBounds(500, 500, 750, 450);
				      dialog.setVisible(true);
				      dialog.setFont(new Font(null, Font.CENTER_BASELINE, 25));
				    });
			
			frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
			frame.setSize(900, 700);
			frame.setVisible(true);
			frame.setLocation(700, 250);
			frame.setTitle("input dialog box");
//			
			frame.setResizable(true);
			frame.add(namet);

			frame.add(name);

			frame.add(aget);
			frame.add(age);

			frame.add(emailt);
			frame.add(email);
			frame.add(phonet);
			frame.add(phone);
			frame.add(messaget);
			frame.add(message);
			frame.add(submit);
//			submit.setLayout(new FlowLayout(FlowLayout.TRAILING));
			frame.setLayout(new GridLayout(11,0,5,5));
//			frame.pack();
			
	
	}

//	@Override
//	public void actionPerformed(ActionEvent e) {
//		
//		// TODO Auto-generated method stub
//		if(e.getActionCommand() == "-SUBMIT-") {
//		
//		JOptionPane.showMessageDialog(null, "this");
//	
//		}}

}
