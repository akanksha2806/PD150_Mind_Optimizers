package com.example.mind_optimizers_android_app;



import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class ScholarshipActivity extends AppCompatActivity {

    TextView scholarship1;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_scholarship);

        scholarship1 = findViewById(R.id.scholarship1);

        scholarship1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "http://www.scholarships.gov.in/";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        scholarship1 = findViewById(R.id.scholarship2);

        scholarship1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "http://www.nhfdc.nic.in/site/Trust_fund.pdf";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        scholarship1 = findViewById(R.id.scholarship3);

        scholarship1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "http://www.nhfdc.nic.in/site/Trust_fund.pdf";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        scholarship1 = findViewById(R.id.scholarship4);

        scholarship1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "http://socialjustice.nic.in/SchemeList/Send/25?mid=24541";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        scholarship1 = findViewById(R.id.scholarship5);

        scholarship1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "http://disabilityaffairs.gov.in/upload/uploadfiles/files/sipda/RGNF.pdf";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        scholarship1 = findViewById(R.id.scholarship6);

        scholarship1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "http://disabilityaffairs.gov.in/content/page/nos--for-students-with-disabilities.php";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        scholarship1 = findViewById(R.id.scholarship7);

        scholarship1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "http://disabilityaffairs.gov.in/upload/uploadfiles/files/Scheme_Top_Class_%20with%20Instt-Final.pdf";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        scholarship1 = findViewById(R.id.scholarship8);

        scholarship1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String url = "http://www.scholarships.gov.in/";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });



    }
}
